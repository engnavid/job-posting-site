import React, { useEffect } from 'react'
import { useQuery, gql } from "@apollo/client";
import { GET_ALL_JOBS } from "../GraphQL/Queries";
import { Card } from 'antd';
import { List, Divider } from 'antd';
import { Modal, Button } from 'antd';
import { ExclamationCircleOutlined } from '@ant-design/icons';
import { Form, Input } from 'antd';
import { Row, Col } from 'antd';
import { useState } from 'react';
import AddJobModal from './AddJobModal';

function GetAllJobs() {

    const [url, setUrl] = useState('bookmarks')
    const [jobs, setJobs] = useState([])
    const [modalVisible, setModalVisible] = useState(false)

    const { loading, error, data } = useQuery(GET_ALL_JOBS);

    useEffect(() => {
        let temp;
        if (data) {
            setJobs([...data.jobs])
            // console.log("We Are Here Bro: ",jobs);
        }
    }, [data]);
    // const myModal = () => {
    //     console.log("Inside MyModal");
    //     <Modal
    //         title="20px to Top"
    //         style={{ top: 20 }}
    //         visible={modalVisible}
    //         onOk={() => setModalVisible(false)}
    //         onCancel={() => setModalVisible(false)}
    //     >
    //         <p>some contents...</p>
    //         <p>some contents...</p>
    //         <p>some contents...</p>
    //     </Modal>
    // }
    console.log("Modal Visible: ", modalVisible);
    let obj = {modalVisible, setModalVisible}
    return (
        <div>
            <AddJobModal obj={obj} />
            <Row>
                <Col>
                    <Card title="Job Posting Admin Panel" extra={<Button type="primary" onClick={() => setModalVisible(true)} >
                        Post New Job
                    </Button>} style={{ width: 1320 }}>
                        { }
                        <List
                            size="large"
                            bordered
                            dataSource={jobs}
                            renderItem={item => <List.Item key={item.id}>
                                {item.title}
                                <Button type="danger" style={{ float: 'right' }} onClick={() => { }}>
                                    Delete
                                </Button>
                                <Button type="primary" style={{ float: 'right', marginRight: 7 }} onClick={() => { }}>
                                    Edit
                                </Button>
                            </List.Item>}
                        />
                    </Card>
                </Col>
            </Row>
        </div>
    )
}

function GetAllJob() {
    const { loading, error, data } = useQuery(GET_ALL_JOBS);

    useEffect(() => {
        if (data) {
            console.log(Object.values(data));
        }
    }, [data]);

    return (
        <div>GetAllJobs</div>
    )
}

export default GetAllJobs

