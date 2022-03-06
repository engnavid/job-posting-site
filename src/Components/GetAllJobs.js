import React, { useEffect, useState } from 'react'
import { useQuery } from "@apollo/client";
import { GET_ALL_JOBS } from "../GraphQL/Queries";
import { Card, List, Button, Row, Col } from 'antd';
import AddJobModal from './AddJobModal';

function GetAllJobs() {
    const [jobs, setJobs] = useState([])
    const [modalVisible, setModalVisible] = useState(false)

    const { data } = useQuery(GET_ALL_JOBS);

    useEffect(() => {
         if (data)
            setJobs([...data.jobs])
    }, [data]);

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
export default GetAllJobs

