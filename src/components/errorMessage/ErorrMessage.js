import img from './error.gif'

const ErorrMessage = () => {
    return (
        <img style={{ display: 'block', with: "250px", height: "250px", objectFit:
        'contain', margin: "0 auto"}} src={img} alt="Error"/>
        )
    }
export default ErorrMessage;