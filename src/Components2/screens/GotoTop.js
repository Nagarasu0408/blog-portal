
import { useState, useEffect } from 'react';
function GoToTop() {
    const [BacktoTop, setBacktoTop] = useState(false);
    const scrollUp = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100) {
                setBacktoTop(true);
            }
            else {
                setBacktoTop(false);
            }
        })
    }, []);
    return (<>
        <div className='BacktoTop'>
            {BacktoTop && (
                <div>
                    <p>
                        <button onClick={scrollUp}>
                            ^
                        </button>
                    </p>
                    <p>Top</p>
                </div>

            )}
        </div>
    </>)
}


export default GoToTop;