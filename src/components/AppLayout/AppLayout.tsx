import React from "react";
import { Layout } from 'antd'

import './AppLayout.css';

const { Sider, Content } = Layout;

export const AppLayout: React.FC = (props) => {
    const { children } = props;

    return (
        <Layout className={'app-layout'}>
            <Sider collapsible defaultCollapsed className={'app-layout-sidebar'} />

            <Content className={'app-layout-content'}>
                <div className="app-layout-content__background">
                    {children}
                </div>
            </Content>
        </Layout>
    )
}