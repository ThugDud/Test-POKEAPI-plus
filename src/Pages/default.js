import Styled from "./default.module.css"

function Contact() {

    function buttonclick() {
        alert("Feedback enviado com sucesso")
    }

    return (
        <div className={Styled.Home}>
            <div className={Styled.Container}>
                <div className={Styled.SideImgCont}>
                    <video src="\images\SnapInsta.io-JoJo's Bizarre Adventure Stone Ocean _ Trailer oficial 4 _ Netflix-(1080p).mp4" loop autoPlay muted />
                </div>
                <div className={Styled.SideForm}>
                    <h1>Dê seu feedback!</h1>
                    <input type="text" placeholder="Nome" />
                    <input type="email" placeholder="Email" />
                    <input type="password" placeholder="Senha" />
                    <textarea placeholder="Mensagem" />
                    <input onClick={buttonclick} type="submit" placeholder="Enviar" />

                </div>
            </div>
        </div>
    );
}

export default Contact;

