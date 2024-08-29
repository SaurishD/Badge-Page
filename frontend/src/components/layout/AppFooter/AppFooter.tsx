import React from "react";
import { Button, Flex, Layout } from 'antd';
import { DiscordOutlined, GithubOutlined, XOutlined } from '@ant-design/icons';
import { Box } from "@mui/material";

const { Footer } = Layout;


const AppFooter: React.FC = () => {
    return (
        <Footer className="p-0 bg-elevation1 text-text-primary">
            <Flex align="center" justify="space-between">
                <div className="ml-4">
                    <Button type="link" icon={<DiscordOutlined />} className="text-text-primary"/>
                    <Button type="link" icon={<GithubOutlined />} className="text-text-primary"/>
                    <Button type="link" icon={<XOutlined />} className="text-text-primary"/>
                </div>
                <Box className='flex items-center border-success-elevation2 border-2 mt-1 mb-1 p-1 rounded-[8px]'>
                    <div className="text-xs">powered by</div>
                    <img src="https://via.placeholder.com/150" alt="logo" className="rounded-full w-4 h-4 ml-2 mr-2"/>
                    <div>Absinthe</div>
                </Box>
                <div style={{ width: '92px' }} /> {/* Invisible spacer */}
            </Flex>
        </Footer>
    );
}

export default AppFooter;