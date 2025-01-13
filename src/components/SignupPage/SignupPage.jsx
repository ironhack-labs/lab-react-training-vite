import React, { useState } from 'react';
import { Form, FormGroup, Label, Input, Button, FormFeedback } from 'reactstrap';

const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const strongPasswordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d@$!%*?&]{8,}$/;

function SignupPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [nationality, setNationality] = useState('');
    const [isEmailValid, setIsEmailValid] = useState(null);
    const [isPasswordStrong, setIsPasswordStrong] = useState(null);

    const handleEmailChange = (e) => {
        const value = e.target.value;
        setEmail(value);
        setIsEmailValid(emailRegex.test(value));
    };

    const handlePasswordChange = (e) => {
        const value = e.target.value;
        setPassword(value);
        setIsPasswordStrong(strongPasswordRegex.test(value));
    };

    const handleNationalityChange = (e) => {
        setNationality(e.target.value);
    };

    const getGreeting = () => {
        switch (nationality) {
            case 'en':
                return 'Hello';
            case 'de':
                return 'Hallo';
            case 'fr':
                return 'Bonjour';
            default:
                return '';
        }
    };

    return (
        <div style={{ maxWidth: '400px', margin: '0 auto' }}>
            <Form>
                <FormGroup>
                    <Label for="email">Correo Electrónico</Label>
                    <Input
                        id="email"
                        type="email"
                        value={email}
                        onChange={handleEmailChange}
                        invalid={isEmailValid === false}
                        valid={isEmailValid === true}
                    />
                    {isEmailValid === false && (
                        <FormFeedback>Por favor, ingresa un correo válido.</FormFeedback>
                    )}
                    {isEmailValid === true && (
                        <FormFeedback valid>El correo es válido.</FormFeedback>
                    )}
                </FormGroup>

                <FormGroup>
                    <Label for="password">Contraseña</Label>
                    <Input
                        id="password"
                        type="password"
                        value={password}
                        onChange={handlePasswordChange}
                        invalid={isPasswordStrong === false}
                        valid={isPasswordStrong === true}
                    />
                    {isPasswordStrong === false && (
                        <FormFeedback>
                            La contraseña es débil. Debe tener al menos 8 caracteres, una mayúscula, una minúscula y un número.
                        </FormFeedback>
                    )}
                    {isPasswordStrong === true && (
                        <FormFeedback valid>La contraseña es fuerte.</FormFeedback>
                    )}
                </FormGroup>

                <FormGroup>
                    <Label for="nationality">Nacionalidad</Label>
                    <Input
                        id="nationality"
                        type="select"
                        value={nationality}
                        onChange={handleNationalityChange}
                    >
                        <option value="">Selecciona tu nacionalidad</option>
                        <option value="en">English</option>
                        <option value="de">Deutsch</option>
                        <option value="fr">Français</option>
                    </Input>
                </FormGroup>

                <Button color="primary" type="submit">
                    Registrarse
                </Button>
            </Form>

            <div style={{ marginTop: '20px' }}>
                {getGreeting() && <p>{getGreeting()}</p>}
                {email && <p>Su correo electrónico es {email}</p>}
            </div>
        </div>
    );
}

export default SignupPage;
