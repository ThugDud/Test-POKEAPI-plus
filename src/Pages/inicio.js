import Popular from './components/Popular/popular'
import Protest from './components/protest/protest'
import Styled from './inicio.module.css'

function Home() {
    return (
        <>
            <div className={Styled.homeBase}>
                <div className={Styled.gameInt}>
                    <Protest />
                    <div className={Styled.PopAnim}>
                        <Popular texto='Toalha Evangelion' />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home