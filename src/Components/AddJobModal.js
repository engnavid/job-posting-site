import React from 'react'
import { CREATE_JOB_MUTATION } from '../GraphQL/Mutations';
import { useMutation } from '@apollo/client';
import { Card } from 'antd';
import { Modal, Button, Form, Input, Radio, Select } from 'antd';
import { Row, Col } from 'antd';
import { useState } from 'react';
const { Option, OptGroup } = Select;




// create a handler for title, name, description, location, commitment and email
const handleChange = (e, setter) => {
    console.log("e: ", e.target);
    setter(e.target.value);
}

function AddJobModal({ obj }) {
    const { modalVisible, setModalVisible } = obj;

    const [title, setTitle] = useState('');
    const [name, setName] = useState('');
    const [commitmentId, setCommitmentId] = useState('');
    const [location, setLocation] = useState('');
    const [email, setEmail] = useState('');
    const [description, setDescription] = useState('');
    const [postJob, { error }] = useMutation(CREATE_JOB_MUTATION);

    const postNewJob = async () => {
        console.log("Posting New Job");
        await postJob({
            variables: {
                  input:{
                    title,
                    commitmentId: "cjtu8esth000z0824x00wtp1i",
                    companyName: name,
                    locationNames: location,
                    userEmail: email,
                    description,
                    applyUrl: 'https://www.google.com'
                }
            }
});

if (error) {
    console.log("Error: ", error);
}
console.log("We are here");
setModalVisible(false);
    }

console.log("Props: ", obj);
return (
    <Modal
        title="Enter New Job Details"
        style={{ top: 20 }}
        visible={modalVisible}
        okText="Post Job"
        cancelText="Cancel"
        onOk={() => postNewJob()}
        onCancel={() => { setModalVisible(false) }}
        destroyOnClose={true}
    >
        <Form
            layout="vertical"
            name="form_in_modal"
            initialValues={{
                modifier: 'public',
            }}>
            <Form.Item
                name="title"
                rules={[
                    {
                        required: true,
                        message: 'Please input the title of Job!',
                    },
                ]}>
                <Input placeholder='Position Title' onChange={(e) => handleChange(e, setTitle)} />
            </Form.Item>
            <Form.Item>
                <Select defaultValue="commitment" value={commitmentId || 'commitment'} onSelect={((value) => setCommitmentId(value))}>
                    <Option value="fullTime">Full Time</Option>
                    <Option value="partTime">Part Time</Option>
                </Select>
            </Form.Item>
            <Form.Item
                name="company"
                rules={[
                    {
                        required: true,
                        message: 'Please Enter Company Name!',
                    },
                ]}>
                <Input placeholder='Company name' onChange={(e) => handleChange(e, setName)} />
            </Form.Item>
            <Form.Item
                name="location"
                rules={[
                    {
                        required: true,
                        message: 'Please Enter Company Location',
                    },
                ]}>
                <Input placeholder='Location' onChange={(e) => handleChange(e, setLocation)} />
            </Form.Item>
            <Form.Item
                name="email"
                rules={[
                    {
                        required: true,
                        message: 'Please Enter Email',
                    },
                ]}>
                <Input placeholder='Your Email' onChange={(e) => handleChange(e, setEmail)} />
            </Form.Item>
            <Form.Item name="description" onChange={(e) => handleChange(e, setDescription)}>
                <Input.TextArea placeholder='Job Description' rows={3} />
            </Form.Item>
        </Form>
    </Modal>
)
}

export default AddJobModal