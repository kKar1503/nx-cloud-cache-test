import {Button} from '@bluente/ui'
import {ButtonProps} from '@bluente/types/ButtonProps'

const props: ButtonProps = {
	children: <span>{"Hello World Brother"}</span>,
	onClick() {
		alert("Button is clicked")
	}
}

export default function ButtonPage() {
	return <Button {...props} />
}