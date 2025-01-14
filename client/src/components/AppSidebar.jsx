import React from 'react'
import {Sidebar,SidebarContent,SidebarFooter,SidebarGroup,SidebarGroupLabel,SidebarHeader,SidebarMenu,SidebarMenuButton,SidebarMenuItem,} from "@/components/ui/sidebar"
import { Link } from 'react-router-dom'
import logo from "@/assets/logo-white.png"
import { IoHomeOutline } from "react-icons/io5";
import { BiCategoryAlt } from "react-icons/bi";
import { GrBlog } from "react-icons/gr";
import { FaRegComments } from "react-icons/fa6";
import { FaUsers } from "react-icons/fa";
import { GoDot } from "react-icons/go";

const AppSidebar = () => {
    return (
        <Sidebar>
            <SidebarHeader className = 'bg-white'>
                <img src={logo} alt="" width={120} />
            </SidebarHeader>
            <SidebarContent className = 'bg-white'>
                <SidebarGroup>
                    <SidebarMenu>

                        <SidebarMenuItem>
                            <SidebarMenuButton>
                                <IoHomeOutline />
                                <Link to="">Home</Link>
                            </SidebarMenuButton>
                        </SidebarMenuItem>
                        <SidebarMenuItem>
                            <SidebarMenuButton>
                                <BiCategoryAlt />
                                <Link to="">Categories</Link>
                            </SidebarMenuButton>
                        </SidebarMenuItem>
                        <SidebarMenuItem>
                            <SidebarMenuButton>
                                <GrBlog />
                                <Link to="">Blogs</Link>
                            </SidebarMenuButton>
                        </SidebarMenuItem>
                        <SidebarMenuItem>
                            <SidebarMenuButton>
                                <FaRegComments />
                                <Link to="">Comments</Link>
                            </SidebarMenuButton>
                        </SidebarMenuItem>
                        <SidebarMenuItem>
                            <SidebarMenuButton>
                                <FaUsers />
                                <Link to="">Users</Link>
                            </SidebarMenuButton>
                        </SidebarMenuItem>

                    </SidebarMenu>
                </SidebarGroup>



                <SidebarGroup>
                    <SidebarGroupLabel>
                        Categories
                    </SidebarGroupLabel>
                    <SidebarMenu>

                        <SidebarMenuItem>
                            <SidebarMenuButton>
                                <GoDot />
                                <Link to="">Category items</Link>
                            </SidebarMenuButton>
                        </SidebarMenuItem>
                        

                    </SidebarMenu>
                </SidebarGroup>
                
            </SidebarContent>
            
        </Sidebar>
    )
}

export default AppSidebar
