import React from "react";
import { Button, Flex, Layout, notification } from 'antd';
import { DiscordOutlined, GithubOutlined, XOutlined } from '@ant-design/icons';

const { Footer } = Layout;


const AppFooter: React.FC = () => {
    return (
        <Footer>
            <Flex align="center" justify="space-between">
                <div>
                    <Button type="link" icon={<DiscordOutlined />} />
                    <Button type="link" icon={<GithubOutlined />} />
                    <Button type="link" icon={<XOutlined />} />
                </div>
                <div>powered by absinthe</div>
                <div style={{ width: '92px' }} /> {/* Invisible spacer */}
            </Flex>
        </Footer>
    );
}

export default AppFooter;