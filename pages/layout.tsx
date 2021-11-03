import React, { useEffect, useState } from 'react'

import Link from 'next/link'
import Image from 'next/image'

import router, { useRouter } from 'next/router';
import { Col, ConfigProvider, Layout, Row, Space, Typography } from 'antd';
import deDE from 'antd/lib/locale/de_DE';

const { Text } = Typography
const { Header, Content, Footer } = Layout
const PageLayout: React.FC = ({ children }) => {

    return (
        <>
            <ConfigProvider locale={deDE}>
                <Layout className="layout">
                    {/* {
                inProgress !== "none" ||
                <UnauthenticatedTemplate>
                    <em>Bitte melden Sie sich an.</em>
                    <p>Stellen sie sicher, dass Popups für diese Seite erlaubt sind und aktualisieren Sie gegebenenfalls die Seite</p>
                    <button onClick={() => instance.loginPopup()}>Login</button>
                </UnauthenticatedTemplate>
            } */}

                    {/* {inProgress === "none" && isAuthenticated && <AuthenticatedTemplate>
                <AppContextProvider>
                    <FeatureFlagProvider value={featureFlags}> */}
                    {/* {displayLocaleSwitcher &&
                                <LanguageAlert
                                    preferredLanguage={preferredLanguage}
                                />
                            } */}
                    <div id="logo">
                        <Link href="/">
                            <a>
                                <Image src="/vercel.svg"
                                    alt="HMS Analytical Software Logo"
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
                                <Space><Text strong type="secondary">HMS</Text><Text type="secondary">Analytical Software GmbH</Text></Space>
                            </Col>
                        </Row>
                    </Footer>
                    {/* </FeatureFlagProvider>
                </AppContextProvider>
            </AuthenticatedTemplate>} */}
                </Layout>
            </ConfigProvider>
        </>
    )
}

export default PageLayout