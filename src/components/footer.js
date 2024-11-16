import Container from 'react-bootstrap/Container';
import React, { useState, useEffect } from 'react';

export default function AppFooter() {
    const [year, setYear] = useState(new Date().getFullYear());
	const [goTop, setGoTop] = useState("false");

	useEffect(() => {
		window.addEventListener("scroll", () => {
			if (window.scrollY > 400) {
				setGoTop(true);
			}else{
				setGoTop(false)
			}
		})
	},[])

    useEffect(() => {
        setYear(new Date().getFullYear());
    }, []);

	function moveTop(){
		window.scrollTo(
			{
				top:0,
				behavior:'smooth'
			}
		)
	}

    return (
        <Container fluid className="">
            <div className='copyright '>
                <p>&copy; {year} MAG. All rights reserved.</p>
            </div>
            <div className='socials '>
                <ul >
                    <li >
                        <a href="https://web.facebook.com/micheal.adeyemi.963/" target="_blank"
                            rel="noopener noreferrer" className="">
                            <i className="fab fa-facebook-f "></i>
                        </a>
                    </li>
                    <li >
                        <a href="https://x.com/MichaelGnaho" target="_blank"
                            rel="noopener noreferrer" className="">
                            <i className="fab fa-twitter "></i>
                        </a>
                    </li>
                    <li >
                        <a href="https://www.linkedin.com/in/michael-adeyemi-gnaho-7b487020b/"
                            target="_blank" rel="noopener noreferrer" >
                            <i className="fab fa-linkedin-in "></i>
                        </a>
                    </li>
                </ul>
            </div>
            {goTop && (
                <div className='go-top ' onClick={moveTop}></div>
            )}
        </Container>
    );
}
