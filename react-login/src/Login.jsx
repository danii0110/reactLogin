import React, {useState, useEffect} from 'react'

const User = {
    email: 'test@example.com',
    pw: 'test2323@@@'
}

export default function Login() {
    const [email, setEmail] = useState('');
    const [pw, setPw] = useState("");

    const [emailValid, setEmailValid] = useState(false);
    const [pwValid, setPwValid] = useState(false);
    const [notAllow, setnotAllow] = useState(true);


    const handleEmail = (e) => {
        setEmail(e.target.value);
        const regex =
            /^(([^<>()\[\].,;:\s@"]+(\.[^<>()\[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
        //정규표현식을 활용해서 입력으로 들어온 이메일값이 이 버튼을 활성화하게끔 할 수 있는지(valid)한지 확인
        if(regex.test(email)) {
            setEmailValid(true);
        } else {
            setEmailValid(false);
        }
    }

    const handlePassword = (e) => {
        setPw(e.target.value);
        const regex =
        /^(?=.*[a-zA-z])(?=.*[0-9])(?=.*[$`~!@$!%*#^?&\\(\\)\-_=+])(?!.*[^a-zA-z0-9$`~!@$!%*#^?&\\(\\)\-_=+]).{8,20}$/;
        if(regex.test(pw)) {
            setPwValid(true);
        } else {
            setPwValid(false);
        }
    }

    const onClickConfirmButton = () => {
        if(email === User.email && pw === User.pw) {
            alert('로그인에 성공했습니다.');
        } else {
            alert('등록되지 않은 회원입니다.');
        }
    }
    
    useEffect (() => {
        if(emailValid && pwValid) { //true이면
            setnotAllow(false); //비활성화 상태를 풀어줌
            return;
        }
        setnotAllow(true); //기본적으로는 비활성화
    }, [emailValid, pwValid]);

    return (
        <div className='page'>
            <div className='titleWrap'>
                이메일과 비밀번호를<br/>입력해주세요
            </div>

            <div className='contentWrap'>
                <div className='inputTitle'>이메일 주소</div>
                <div className='inputWrap'>
                    <input
                    type='text'
                    className='input'
                    placeholder='test@gmail.com'
                    value={email}
                    onChange={handleEmail}/>
                </div>
                <div className='errorMessageWrap'>
                    {
                        !emailValid && email.length>0 && (
                            <div>올바른 이메일을 입력해주세요.</div>
                        )
                    }
                </div>

                <div style={{marginTop: "26px"}} className='inputTitle'>비밀번호</div>
                <div className='inputWrap'>
                    <input
                    type='password'
                    className='input'
                    placeholder="영문, 숫자, 특수문자 포함 8자 이상"
                    value={pw}
                    onChange={handlePassword}
                    />
                </div>
                <div className='errorMessageWrap'>
                    {!pwValid && pw.length>0 && (
                        <div>영문, 숫자, 특수문자 포함 8자 이상 입력해주세요.</div>
                    )}
                </div>
            </div>
            

            <div>
                <button onClick={onClickConfirmButton} disabled={notAllow} className='bottomButton'>
                    확인
                </button>
            </div>
        </div>  
    );
}