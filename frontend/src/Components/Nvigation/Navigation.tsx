import React from 'react';
import {Link} from "react-router-dom";

const Navigation = () => {
    return (
        <>
            <div className='flex items-center justify-between'>
                <div>
                    <Link to='/'>
                        <h1>lavanderia</h1>
                    </Link>
                </div>
                <ul className='flex items-center  ml-auto  space-x-4'>
                    <li className='m-1.5'>
                        <Link to="/application">
                            신청하기
                        </Link>
                    </li>
                    <li>
                        <Link to="/premium">
                            프리미엄
                        </Link>
                    </li>
                    <li>
                        <Link to='/community'>
                            커뮤니티
                        </Link>
                    </li>
                    <li>
                        <Link to='servicecenter'>
                            고객센터
                        </Link>
                    </li>
                </ul>
                <ul className='flex items-center ml-auto  space-x-4'>
                    <li>
                        <Link to='/login'>
                            로그인
                        </Link>
                    </li>
                    <li>
                        <Link to='/signup'>
                            회원가입
                        </Link>
                    </li>
                </ul>
            </div>
        </>
    );
};

export default Navigation;