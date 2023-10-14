import logo from '../../../public/assets/foodsUp.png'

interface Props {
    className?: string
}

const FoodsUpIcon = ({className}: Props) => {
    return (
        <img className={className} src={logo} alt="" />
    )
}

export default FoodsUpIcon;