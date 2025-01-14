import { MenuUnfoldOutlined } from "@ant-design/icons";
import { Drawer, Menu } from "antd";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import logo from "@assets/images/logo.svg";
import iconSkype from "@assets/images/icon-skype.svg";
import iconTele from "@assets/images/icon-tele.svg";
import BlockContent from "../components/BlockContent";

export default function Header() {
  const dataMenu = [
    {
      title: "Aridrop",
      onclick: "#aridrop",
    },
    {
      title: "About Us",
      onclick: "#about-us",
    },
    {
      title: "Pepetomomics",
      onclick: "#pepetomomics",
    },
    {
      title: "Earn",
      onclick: "#earn",
    },
  ];
  const [active, setActive] = useState("");
  const [scrollTop, setScrollTop] = useState(0);

  useEffect(() => {
    console.log(window.location.pathname);

    setActive(window.location.pathname);
  }, []);
  useEffect(() => {
    const handleScroll = (event: any) => {
      setScrollTop(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const [visible, setVisible] = useState(false);
  const showDrawer = () => {
    setVisible(!visible);
  };
  // const handleClickMenu = (val: any) => {
  //   sessionStorage.setItem("menu-active", val.onclick);
  // };

  return (
    <React.Fragment>
      <div className={`header-app w-full fixed z-10`}>
        <BlockContent>
          <div className="flex justify-between items-center py-[15px]">
            <div className="flex gap-8">
              <Image alt="logo" src={logo} />
              <Menu className="menu flex justify-between bg-transparent">
                {dataMenu.map((item, key) => (
                  <Menu.Item className="glow-on-hover menu__item" key={key}>
                    <a
                      href={item.onclick}
                      className={`${active === item.onclick && "active-menu"}`}
                    >
                      {item.title}
                    </a>
                  </Menu.Item>
                ))}
              </Menu>
            </div>
            <div className="flex gap-20 items-center">
              <div className="flex gap-4 items-center">
                <div>
                  <Image alt="" src={iconSkype} />
                </div>
                <div>
                  <Image alt="" src={iconTele} />
                </div>
              </div>
              <div className="flex gap-8 items-center">
                <button className="glow-on-hover py-2 px-3 text-white font-medium bg-transparent border-2 border-[#ECFF76] rounded-xl font-montserrat btn-lauch ">
                  Buy Now
                </button>
                <button className="glow-on-hover py-2 px-3 text-white font-medium bg-transparent border-2 border-[#ECFF76] rounded-xl font-montserrat btn-lauch ">
                  Connect Wallet
                </button>
              </div>
            </div>
            <div className="menuButton hidden" onClick={showDrawer}>
              <MenuUnfoldOutlined />
            </div>
            <Drawer
              placement="right"
              closable={true}
              onClose={showDrawer}
              open={visible}
              style={{ zIndex: 99999 }}
            >
              <Menu>
                {dataMenu.map((item, key) => (
                  <Menu.Item key={key} className="capitalize">
                    <a
                      className={`${active === item.onclick && "active-menu"}`}
                      href={`${item.onclick}`}
                    >
                      {item.title}
                    </a>
                  </Menu.Item>
                ))}
                <div className="py-2 px-3  bg-[#21294D] w-fit">
                  <button className="py-2 px-3 text-white font-medium font-montserrat ">
                    Launch Dapp
                  </button>
                </div>
              </Menu>
            </Drawer>
          </div>
        </BlockContent>
      </div>
    </React.Fragment>
  );
}
