import React, { useEffect, useState } from 'react'

import Link from 'next/link'
import Image from 'next/image'

import { Col, ConfigProvider, Layout, Row, Space, Typography } from 'antd';
import deDE from 'antd/lib/locale/de_DE';

const { Text } = Typography
const { Header, Content, Footer } = Layout
const PageLayout: React.FC = ({ children }) => {

    return (
        <>
            <ConfigProvider locale={deDE}>
                <Layout className="layout">
                    <div id="logo">
                        <Link href="/">
                            <a>
                                <Image src="/vercel.svg"
                                    width="100"
                                    height="25"
                                />
                            </a>
                        </Link>
                    </div>
                    <Header>
                        {/* <NavBar /> */}
                    </Header>
                    <Content>
                        {children}
                        <div id='modal-root' />
                    </Content>

                    <Footer className="footer">
                        <Row justify={'space-between'} gutter={[8, 8]}>
                            <Col span={12}>
                                {/* <Health /> */}
                            </Col>
                            <Col>

                            </Col>
                        </Row>
                    </Footer>
                </Layout>
            </ConfigProvider>
        </>
    )
}

export default PageLayout