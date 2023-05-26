import React from "react";

import { Card,  Col, Container, Image, Row } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

import { AnimationOnScroll } from "react-animation-on-scroll";
import "animate.css/animate.min.css";


export const About = () => {

    return (
        <Container>
            <Card className="p-3">
                <Card.Body >
                    <Container >
                        <Row xs={1} sm={2}  >
                            <Col lg={2} xs={4}>
                                <AnimationOnScroll animateIn="animate__pulse">
                                    <Image src="/imgs/for-rezume.jpg" thumbnail />
                                </AnimationOnScroll>
                            </Col>

                            <Col className="d-flex align-items-center">
                                <AnimationOnScroll animateIn="animate__bounce">
                                    <h2>Здравствуйте, я Сергеев Вадим Сергеевич</h2>
                                </AnimationOnScroll>
                            </Col>
                        </Row>
                    </Container>
                </Card.Body>

                <Card.Body>
                    <AnimationOnScroll animateIn="animate__fadeInUp" animateOut="animate__fadeOutUp" offset={60} >
                        <Card.Title>
                            Адрес
                        </Card.Title>

                        <Card.Text className="ps-3">
                            Россия, 654011, Кемеровская область, г. Новокузнецк, Новоильинский район.
                        </Card.Text>
                    </AnimationOnScroll>
                </Card.Body>

                <Card.Body>
                    <AnimationOnScroll animateIn="animate__fadeInUp" animateOut="animate__fadeOutUp" offset={60} >
                        <Card.Title>
                            Цель
                        </Card.Title>

                        <Card.Text className="ps-3">
                            получение нового опыта, развитие навыков frontend разработки, создание интересных, сложных, красивых и нужных приложений.
                        </Card.Text>
                    </AnimationOnScroll>
                </Card.Body>

                <Card.Body>
                    <AnimationOnScroll animateIn="animate__fadeInUp" animateOut="animate__fadeOutUp" offset={60} >
                        <Card.Title>
                            Общие сведения
                        </Card.Title>

                        <Card.Text className="ps-3">
                            <strong>дата и место рождения:</strong> 18.08.1996, г. Новокузнецк;
                        </Card.Text>

                        <Card.Text className="ps-3">
                            <strong>Гражданство:</strong> РФ;
                        </Card.Text>

                        <Card.Text className="ps-3">
                            <strong>Семейное положение:</strong> женат.
                        </Card.Text>
                    </AnimationOnScroll>
                </Card.Body>

                <Card.Body>
                    <AnimationOnScroll animateIn="animate__fadeInUp" animateOut="animate__fadeOutUp" offset={60} >
                        <Card.Title>
                            Образование
                        </Card.Title>

                        <Card.Text className="p-3">
                            <strong>2014-2020г.</strong> – Сибирский государственный индустриальный университет, институт информационных технологий и автоматизированных систем, направление «Информационно – управляющие системы», квалификация «Магистр», диплом с отличием.
                        </Card.Text>
                    </AnimationOnScroll>
                </Card.Body>

                <Card.Body>
                    <AnimationOnScroll animateIn="animate__fadeInUp" animateOut="animate__fadeOutUp" offset={60} >
                        <Card.Title>
                            Опыт работы
                        </Card.Title>
                        <Card.Text className="ps-3">
                            <strong>с 2019г.</strong>  – ООО «ЕвразТехника» (г. Новокузнецк). УПП. Отдел мониторинга ИТ-сервисов, ведущий специалист; обязанности: администрирование HP Service Desk (HPSD) и СУЗ; участие в проекте AnalizML (классификация и автоназначение почтовых заявок пользователей в HPSD), маршрутизация заявок в СЭД, составление отчетов в Power BI, участие в разработке пользовательского портала (занимался исправление и дополнением кода для чата между пользователями и диспетчерами)
                        </Card.Text>

                        <Card.Text className="ps-3">
                            <strong>2018-2019г.</strong> – ООО «Научно-исследовательский центр систем управления» (г.Новокузнецк), инженер отдела систем технологического управления; обязанности: разработка проектной и рабочей документации систем автоматизации управления технологическими процессами обогатительных фабрик и других промышленных предприятий, выполнение пуско-наладочных работ.
                        </Card.Text>

                        <Card.Text className="ps-3">
                            <strong>2015-2018г.</strong>   - ООО «Г и Д», инструктор по обучению; это "Макдоналдс".
                        </Card.Text>
                    </AnimationOnScroll>
                </Card.Body>

                <Card.Body>
                    <AnimationOnScroll animateIn="animate__fadeInUp" animateOut="animate__fadeOutUp" offset={60} >
                        <Card.Title>
                            Дополнительные сведения
                        </Card.Title>
                    </AnimationOnScroll>

                    <AnimationOnScroll animateIn="animate__fadeInUp" animateOut="animate__fadeOutUp" offset={60} >
                        <Card.Text className="ps-3">
                            <strong>Есть</strong> небольшое <strong>понимание back-end</strong> делал задание <a target="_blank" rel="noreferrer" href="https://github.com/vadyavadya/task_tracker_dz">ссылка</a>  для устройства на работу, на робу не взяли без объяснения, после 3-его собеседования с начальницей управления, реализовано на python, с использованием сервера flask и бд sqlalchemy.
                        </Card.Text>
                    </AnimationOnScroll>

                    <AnimationOnScroll animateIn="animate__fadeInUp" animateOut="animate__fadeOutUp" offset={60} >
                        <Card.Text className="ps-3">
                            В дальнейшем понял что бэк не так интересен как фронт и начал проходить обучения.
                        </Card.Text>

                        <Card.Text className="ps-3">
                            Сначала <strong>изучил HTML, CSS, препроцессор SCSS, js, технологию БЭМ, flex, grid,</strong> знаю что такое адаптивная <strong>кроссбраузерная верстка.</strong>
                        </Card.Text>

                        <Card.Text className="ps-1">
                            Работы этапа верстки:
                        </Card.Text>


                        <Row xs={1} md={2} lg={4} className="mb-3">
                            <Col>
                                <a href="https://vadyavadya.github.io/chik-chik" target="_blank" rel="noreferrer"><Image src="/imgs/chik-chik.png" rounded fluid alert="картинка сайта chik-chik" /></a>
                            </Col>

                            <Col>
                                <a href="https://vadyavadya.github.io/web_stady/flsStartTemplate_gerich/dist/home.html" target="_blank" rel="noreferrer"><Image src="/imgs/gerich.png" rounded fluid alert="картинка сайта ресторана герич" /></a>
                            </Col>

                            <Col>
                                <a href="https://vadyavadya.github.io/web_stady/fitness-traiiner/dist/home.html" target="_blank" rel="noreferrer"><Image src="/imgs/fitness.png" rounded fluid alert="картинка сайта trainer fitness" /></a>
                            </Col>

                            <Col>
                                <a href="https://vadyavadya.github.io/christmas-trees" target="_blank" rel="noreferrer"><Image src="/imgs/chritmas-tree.png" rounded fluid alert="картинка сайта продажи елок" /></a>

                            </Col>
                        </Row>

                    </AnimationOnScroll>

                    <AnimationOnScroll animateIn="animate__fadeInUp" animateOut="animate__fadeOutUp" offset={60} >
                        <Card.Text>
                            Далее сложилось понимание что для полноценного изучения профессии требуются еще технологии, и <strong>изучил React и Redux</strong>.
                        </Card.Text>

                        <Card.Text className="ps-4">
                            по <a href="https://github.com/vadyavadya/react-found-curse" target="_blank" rel="noreferrer">React</a> в проекте <strong>есть описании</strong> не буду его сюда повторять, а так же там же есть ссылка на gh page
                        </Card.Text>

                        <Card.Text className="ps-4">
                            закрепление <a href="https://github.com/vadyavadya/react-route-redux-posts" target="_blank" rel="noreferrer">Redux</a>
                        </Card.Text>
                    </AnimationOnScroll>
                </Card.Body>
            </Card>
            <AnimationOnScroll animateIn="animate__zoomInDown" offset={0}>
                <div className="p-3 text-center display-1">Спасибо за внимание</div>
            </AnimationOnScroll>
        </Container>
    )
}
