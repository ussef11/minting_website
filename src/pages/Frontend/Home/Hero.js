import React, { useState } from 'react'
import { Card, Col, Divider, Row } from 'antd';
import cardImg from 'assets/card-img.gif'
import Title from 'antd/es/typography/Title';
import { MdAdd } from 'react-icons/md'
import { GrSubtract } from 'react-icons/gr'
import { FaDiscord, FaTwitter } from 'react-icons/fa'
import { AiOutlineGlobal } from 'react-icons/ai'
export default function Hero() {
    const [count, setCount] = useState(0);

    const handleIncrease = () => {
        if (count < 10) {
            setCount(count + 1);
        }
    };

    const handleDecrease = () => {
        if (count > 0) {
            setCount(count - 1);
        }
    };

    const dividerStyle = {
        height: "3px",
        backgroundColor: "white",
    };
    return (
        <div className='homeHero flex justify-center items-center'>
            <Row>
                <Col xs={{ span: 24 }} className='animate__animated animate__bounceInDown flex justify-center'>
                    <Card hoverable className='w-full mx-5 lg:mx-0 lg:w-2/3 bg-slate-200 hover:bg-slate-300 border-none rounded-3xl'>
                        <Row>
                            <Col span={24} className='text-center '>
                                <Title level={2} className='text-lime-600 font-mono subpixel-antialiased italic '>
                                    Mint
                                </Title>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={24} sm={12}>
                                <img src={cardImg} alt="" className='rounded-2xl' />
                            </Col>
                            <Col xs={24} sm={12} className='px-12'>
                                <div className='flex justify-between my-10'>
                                    <button onClick={handleIncrease} className='bg-green-600 rounded-md border-none'><MdAdd size='30px' className='mx-4 my-1' /></button>
                                    <span className='font-bold text-2xl'>{count}</span>
                                    <button onClick={handleDecrease} className='bg-red-600 rounded-md border-none' ><GrSubtract size='25px' className='mx-4 my-1' /></button>
                                </div>
                                <p className=' my-5 text-center italic font-semibold'>Max Mint Amount : 10</p>
                                <div className='mb-10'>
                                    <Divider style={dividerStyle} />
                                    <div className='flex justify-between'>
                                        <p className='text-indigo-900 font-bold text-xl font-sans'>Total</p>
                                        <p className='font-bold text-xl'>{`${(3.0 * count).toFixed(1)} Sol + `}  <span className='text-gray-500'>GAS</span></p>
                                    </div>
                                    <Divider style={dividerStyle} />
                                </div>
                                <div className='cardButton'>
                                    <button>
                                        <span>Connect Wallet</span>
                                    </button>
                                </div>
                                <div className='flex justify-around my-7'>
                                    <a href="http://discord.gg/thebutterflydiaries" target='_blank' rel="noreferrer" >
                                        <button className='bg-yellow-400 rounded-md border-none'><FaDiscord size='30px' className='mx-4 my-1 text-white hover:text-yellow-200' /></button>
                                    </a>

                                    <a href="http://twitter.com/thebuttnft" target='_blank' rel="noreferrer" >
                                        <button className='bg-blue-600 rounded-md border-none'><FaTwitter size='30px' className='mx-4 my-1 text-white hover:text-blue-200' /></button>
                                    </a>

                                    <a href="http://thebutterflydiaries.com" target='_blank' rel="noreferrer" >
                                        <button className='bg-gray-600 rounded-md border-none'><AiOutlineGlobal size='30px' className='mx-4 my-1 text-white hover:text-gray-200' /></button>
                                    </a>
                                </div>
                            </Col>
                        </Row>
                        {/* <Row>
                            <Col className='text-center' span={24}>
                                <p className='font-mono text-2xl font-semibold antialiased italic text-indigo-900'>Contract Address</p>
                                <a href="https://www.taisenworld.com/mint" target='_blank' rel="noreferrer" className='text-decoration-none'>Whitelist Mint - 2.5 Solana + Gas
                                    Public Mint - 3.0 Solana + Gas</a>
                            </Col>
                        </Row> */}
                    </Card>
                </Col>
            </Row>
        </div >
    )
}
