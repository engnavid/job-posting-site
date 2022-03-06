import React, { useState } from 'react'
import { CREATE_JOB_MUTATION } from '../GraphQL/Mutations';
import { useMutation } from '@apollo/client';
import { Modal, Form, Input, Select } from 'antd';
import swal from '@sweetalert/with-react'


const { Option } = Select;


const handleChange = (e, setter) => {
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
    const [applyUrl, setApplyUrl] = useState('');

    const [postJob, { error }] = useMutation(CREATE_JOB_MUTATION);

    const postNewJob = async () => {
        const res = await postJob({
            variables: {
                title,
                commitmentId: "cjtu8esth000z0824x00wtp1i",
                companyName: name,
                locationNames: location,
                userEmail: email,
                description,
                applyUrl,
            }
        });
        if (res) {
            swal({
                title: `Job ${res.data.postJob.title} is Successfully Posted`,
                icon: "success",
            });
        }
        if (error)
            console.log("Error: ", error);

        setModalVisible(false);
    }

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
                <Form.Item
                    name="applyUrl"
                    rules={[
                        {
                            required: true,
                            message: 'Please Enter apply Url',
                        },
                    ]}>
                    <Input placeholder='apply url' onChange={(e) => handleChange(e, setApplyUrl)} />
                </Form.Item>
                <Form.Item name="description" onChange={(e) => handleChange(e, setDescription)}>
                    <Input.TextArea placeholder='Job Description' rows={3} />
                </Form.Item>
            </Form>
        </Modal>
    )
}

export default AddJobModal