import React from "react"
import "./App.css"
import Button from "react-bootstrap/Button"
import {
	Container,
	Row,
	Col,
	Alert,
	Breadcrumb,
	Card,
	Form,
} from "react-bootstrap"

// import { Button } from 'react-bootstrap';

const App = () => {
	return (
		<div className="App">
			<header className="App-header">
				<Container>
					<Breadcrumb>
						<Breadcrumb.Item active>Test</Breadcrumb.Item>
						<Breadcrumb.Item>Test 2</Breadcrumb.Item>
						<Breadcrumb.Item>Test 3</Breadcrumb.Item>
					</Breadcrumb>

					<Alert variant="secondary">This is a button</Alert>
					<Button>Test Button</Button>
					<br />
					<br />
					{/* cards  */}
					<Card style={{ color: "#333" }} className="mb-3">
						<Card.Img src="https://picsum.photos/200/300" />
						<Card.Body></Card.Body>

						<Card.Title>Card Example</Card.Title>
						<Card.Text>React bootstrap cards</Card.Text>
						<Button variant="primary">Read more..</Button>
					</Card>

					{/* forms */}
				</Container>

				<Container>
					<Form>
						<Row>
							<Col md>
								<Form.Group controlId="formEmail">
									<Form.Label>Email Address</Form.Label>
									<Form.Control type="email" placeholder="example@email.com" />
									<Form.Text className="text-muted">
										we have your information secret..
									</Form.Text>
								</Form.Group>
							</Col>
							<Col md>
								<Form.Group controlId="formPassword">
									<Form.Label>Password</Form.Label>
									<Form.Control type="password" placeholder="password" />
								</Form.Group>
								<Button variant="secondary" type="submit">
									Login
								</Button>
							</Col>
						</Row>
					</Form>
				</Container>
			</header>
		</div>
	)
}

export default App
