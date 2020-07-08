import React from "react";
import "./styles.css";

class HomePage extends React.Component {
    constructor() {
        super();
        this.submitForm = this.submitForm.bind(this);
        this.state = {
            opacity: '1.0',
            status: "",
        };
    }
    listenScrollEvent = e => {
        if (window.scrollY > 400) {
            this.setState({opacity: '0.3'})
        } else {
            this.setState({opacity: '1.0'})
        }
    }

    componentDidMount() {
        window.addEventListener('scroll', this.listenScrollEvent)
    }
    submitForm(ev) {
        ev.preventDefault();
        const form = ev.target;
        const data = new FormData(form);
        const xhr = new XMLHttpRequest();
        xhr.open(form.method, form.action);
        xhr.setRequestHeader("Accept", "application/json");
        xhr.onreadystatechange = () => {
            if (xhr.readyState !== XMLHttpRequest.DONE) return;
            if (xhr.status === 200) {
                form.reset();
                this.setState({ status: "SUCCESS" });
            } else {
                this.setState({ status: "ERROR" });
            }
        };
        xhr.send(data);
    }
    render() {
        const { status } = this.state;
        return (
            <div className='main'>
                <div className="header" style={{ opacity: `${this.state.opacity}`}} >
                    <div className="nameAndPicture">
                        <h1 className='name'>Abhishek Shrivastava</h1>
                        <img alt=""  src={require('../profilepic.jpg')} style={{width: 80, height: 80, borderRadius: 40,margin:10}} />
                    </div>
                    <div className="menu">
                        <a href="#whatIDo"><button className="button" >WHAT I DO</button></a>
                        <a href="#portfolio"><button className="button" >PORTFOLIO</button></a>
                        <a href="#about"><button className="button" >ABOUT ME</button></a>
                        <a href="#contact"><button className="button" >CONTACT</button></a>
                    </div>
                </div>
                <div class="body">
                    <div className="section1" style={{ backgroundImage: `url(${require("../background.jpg")})`,objectFit:"cover",backgroundSize:"cover",backgroundPosition:"center" }}>
                        {/*<div className='descriptionDiv'>*/}
                                <p className='mainDescription1'>Full-Stack </p>
                                <p className='mainDescription2'>Flutter | Node-js | React-js </p>
                                <p className='mainDescription1'>Developer </p>
                        {/*</div>*/}
                </div>
                <div id='whatIDo'>
                    <div>
                            <p style={{ color:'black',fontSize:50,fontWeight:'bold' }}>What I Do </p>
                            <p style={{ color:'gray',fontSize:30,fontWeight:'bold' }}>Things I am skilled and passionate about</p>
                    </div>
                        <div>
                            <img alt="" className='skillsImage' src={require('../webdevelopment.jpg')} />
                            <p style={{ color:'black',fontSize:30,fontWeight:'bold' }}>Web Application Development</p>
                            <p style={{ color:'gray',fontSize:20,fontWeight:'bold' }}>Fast , reponsive and engaging apps that bring
                                your ideas to life</p>
                        </div>
                        <div>
                            <img alt="" className='skillsImage' src={require('../mobileappdevelopment.png')} />
                            <p style={{ color:'black',fontSize:30,fontWeight:'bold' }}>Mobile Application Development</p>
                            <p style={{ color:'gray',fontSize:20,fontWeight:'bold' }}>Cross-platform apps built with efficiency and speed for Android and iOS at once using Flutter</p>
                        </div>
                        <div>
                            <img alt="" className='skillsImage' src={require('../databasedevelopment.jpg')} />
                            <p style={{ color:'black',fontSize:30,fontWeight:'bold' }}>Database Design</p>
                            <p style={{ color:'gray',fontSize:20,fontWeight:'bold' }}>Database architectures in MongoDB, AmazonAWS or Firebase always aiming for performance, scale and stability.</p>
                        </div>
                        <div>
                            <img alt="" className='skillsImage' src={require('../cloudintegration.png')} />
                            <p style={{ color:'black',fontSize:30,fontWeight:'bold' }}>Cloud Integration</p>
                            <p style={{ color:'gray',fontSize:20,fontWeight:'bold' }}>Deployment of NodeJS apps, ReactJS apps and databases to leading cloud platforms such as Firebase and Amazon AWS.</p>
                        </div>
                    <div>
                        <p style={{ color:'black',fontSize:50,fontWeight:'bold' }}>GitHub Activity Screenshot</p>
                        <img alt="" className='flutterImage' src={require('../githubprofile.jpg')} />
                    </div>
                    </div>
                    <div id='portfolio'>


                        <div>
                            <p style={{ color:'black',fontSize:50,fontWeight:'bold' }}>Portfolio</p>
                            <p style={{ color:'gray',fontSize:30,fontWeight:'bold' }}>Some of my latest work.</p>
                        </div>
                        <div>
                            <p style={{ color:'black',fontSize:30,fontWeight:'bold' }}>McLaren Times App</p>
                            <a href="https://www.youtube.com/watch?v=_IskxFpf7F0" target="_blank" rel="noopener noreferrer"><img alt=""  src={require('../youtube.png')} style={{width: 50, height: 50, borderRadius: 50/ 2,marginLeft:10}} /></a>
                            <p style={{ color:'gray',fontSize:20,fontWeight:'bold' }}>This is a Flutter News App based on Hacker Times api.The Stories
                                have been distributed across different 'day' Tabs as per the story-timestamp.The viewer has options to vote for or suggest a
                                subtitle or image.Firebase has been used at the backend to maintain user records and updates.</p>

                            <img alt="" className='flutterImage' src={require('../mcTimes1.png')} />
                            <img alt="" className='flutterImage' src={require('../mcTimes2.png')} />
                            <img alt="" className='flutterImage' src={require('../mcTimes3.png')} />
                            <img alt="" className='flutterImage' src={require('../mcTimes4.png')} />
                        </div>
                        <div>
                            <p style={{ color:'black',fontSize:30,fontWeight:'bold' }}>Tic Tac Toe App</p>
                            <a href="https://github.com/sabhishek78/tic_tac_toe_starter" target="_blank" rel="noopener noreferrer"><img alt=""  src={require('../githubIcon.png')} style={{width: 50, height: 50, borderRadius: 50/ 2}} /></a>
                            <a href="https://github.com/sabhishek78/tic_tac_toe_starter" target="_blank" rel="noopener noreferrer"><img alt="" src={require('../youtube.png')} style={{width: 50, height: 50, borderRadius: 50/ 2,marginLeft:10}} /></a>
                            <p style={{ color:'gray',fontSize:20,fontWeight:'bold' }}>This project is a flutter implementation of the Tic-Tac-Toe Board game.
                            The game features two different modes,two player mode and v/s computer mode. The code for game logic and UI has been segregated. Animation has been implemented to display the icons.</p>
                            <img alt="" className='flutterImage' src={require('../tictactoe1.png')} />
                            <img alt="" className='flutterImage' src={require('../tictactoe2.png')} />
                            <img alt="" className='flutterImage' src={require('../tictactoe3.png')} />
                          
                        </div>

                        <div>
                            <p style={{ color:'black',fontSize:30,fontWeight:'bold' }}>Movie Carousel App</p>
                            <a href="https://github.com/sabhishek78/day_4_movies_assignment" target="_blank" rel="noopener noreferrer"><img alt=""  src={require('../githubIcon.png')} style={{width: 50, height: 50, borderRadius: 50/ 2}} /></a>
                            <a href="https://github.com/sabhishek78/tic_tac_toe_starter" target="_blank" rel="noopener noreferrer"><img alt="" src={require('../youtube.png')} style={{width: 50, height: 50, borderRadius: 50/ 2,marginLeft:10}} /></a>
                            <p style={{ color:'gray',fontSize:20,fontWeight:'bold' }}>A Flutter App displaying Movies in a Carousel Slider. The movies
                            can be read from a JSON File or a network resource.</p>
                            <img alt="" className='flutterImage' src={require('../carousel1.png')} />
                            <img alt="" className='flutterImage' src={require('../carousel2.png')} />
                            <img alt="" className='flutterImage' src={require('../carousel3.png')} />
                        </div>
                        <div>
                            <p style={{ color:'black',fontSize:30,fontWeight:'bold' }}>Currency Exchange App</p>
                            <a href="https://github.com/sabhishek78/currency_exchange_app" target="_blank" rel="noopener noreferrer"><img alt="" src={require('../githubIcon.png')} style={{width: 50, height: 50, borderRadius: 50/ 2}} /></a>
                            <a href="https://www.youtube.com/watch?v=zMxbJr9V9mE" target="_blank" rel="noopener noreferrer"><img alt="" src={require('../youtube.png')} style={{width: 50, height: 50, borderRadius: 50/ 2,marginLeft:10}} /></a>
                            <p style={{ color:'gray',fontSize:20,fontWeight:'bold' }}>A Currency Converter App based on Open Rates api</p>
                            <img alt="" className='flutterImage' src={require('../ce1.png')} />
                            <img alt="" className='flutterImage' src={require('../ce2.png')} />
                            <img alt="" className='flutterImage' src={require('../ce3.png')} />

                        </div>
                        <div>
                            <p style={{ color:'black',fontSize:30,fontWeight:'bold' }}>Animal Guess Game App</p>
                            <a href="https://github.com/sabhishek78/animal_game_botchat" target="_blank" rel="noopener noreferrer"><img alt="" src={require('../githubIcon.png')} style={{width: 50, height: 50, borderRadius: 50/ 2}} /></a>
                            <a href="https://www.youtube.com/watch?v=DC8aVbtFzIE" target="_blank" rel="noopener noreferrer"><img alt="" src={require('../youtube.png')} style={{width: 50, height: 50, borderRadius: 50/ 2,marginLeft:10}} /></a>
                            <p style={{ color:'gray',fontSize:20,fontWeight:'bold' }}>A Dart based Animal Guess Game. The user guesses the animal and
                            accordingly new nodes are added to the animal tree.</p>
                            <img alt="" className='flutterImage' src={require('../agg1.png')} />
                            <img alt="" className='flutterImage' src={require('../agg2.png')} />
                            <img alt="" className='flutterImage' src={require('../agg3.png')} />
                        </div>
                        <div>
                            <p style={{ color:'black',fontSize:30,fontWeight:'bold' }}>Climate App</p>
                            <a href="https://github.com/sabhishek78/climate_appnew" target="_blank" rel="noopener noreferrer"><img alt="" src={require('../githubIcon.png')} style={{width: 50, height: 50, borderRadius: 50/ 2}} /></a>
                            <a href="https://github.com/sabhishek78/tic_tac_toe_starter" target="_blank" rel="noopener noreferrer"><img alt="" src={require('../youtube.png')} style={{width: 50, height: 50, borderRadius: 50/ 2,marginLeft:10}} /></a>
                            <p style={{ color:'gray',fontSize:20,fontWeight:'bold' }}>A Climate App based on OpenWeatherMap api. The app displays the temperature
                            at a chosen location and accordingly the background wallpaper and icons are displayed.</p>
                            <img alt="" className='flutterImage' src={require('../climate1.png')} />
                            <img alt="" className='flutterImage' src={require('../climate2.png')} />
                        </div>
                        <div>
                            <p style={{ color:'black',fontSize:30,fontWeight:'bold' }}>Spotify App</p>
                            <a href="https://github.com/sabhishek78/spotify_player_clone" target="_blank" rel="noopener noreferrer"><img alt="" src={require('../githubIcon.png')} style={{width: 50, height: 50, borderRadius: 50/ 2}} /></a>
                            <a href="https://www.youtube.com/watch?v=pWRwdgd-UK0" target="_blank" rel="noopener noreferrer"><img alt="" src={require('../youtube.png')} style={{width: 50, height: 50, borderRadius: 50/ 2,marginLeft:10}} /></a>
                            <p style={{ color:'gray',fontSize:20,fontWeight:'bold',textAlign:'center' }}>This is an implementation of a Music Player App. The music
                            can be read from a JSON file or a network resource. The wallpaper and the options to move ahead or back the music
                            tracks is displayed.</p>
                            <img alt="" className='flutterImage' src={require('../spotify1.png')} />
                            <img alt="" className='flutterImage' src={require('../spotify2.png')} />
                            <img alt="" className='flutterImage' src={require('../spotify3.png')} />
                            <img alt="" className='flutterImage' src={require('../spotify4.png')} />
                        </div>
                        <div>
                            <p style={{ color:'black',fontSize:30,fontWeight:'bold' }}>Maps App</p>
                            <a href="https://github.com/sabhishek78/maps_app" target="_blank" rel="noopener noreferrer"><img alt="" src={require('../githubIcon.png')} style={{width: 50, height: 50, borderRadius: 50/ 2}} /></a>
                            <a href="https://github.com/sabhishek78/tic_tac_toe_starter" target="_blank" rel="noopener noreferrer"><img alt="" src={require('../youtube.png')} style={{width: 50, height: 50, borderRadius: 50/ 2,marginLeft:10}} /></a>
                            <p style={{ color:'gray',fontSize:20,fontWeight:'bold' }}>A Google Maps App based on the google map api. The user can search for a particular location
                            and the app adds a marker to it.</p>
                            <img alt="" className='flutterImage' src={require('../maps1.png')} />
                            <img alt="" className='flutterImage' src={require('../maps2.png')} />
                            <img alt="" className='flutterImage' src={require('../maps3.png')} />
                        </div>
                        <div>
                            <p style={{ color:'black',fontSize:30,fontWeight:'bold' }}>Quotes App</p>
                            <a href="https://github.com/sabhishek78/my_quotes_app" target="_blank" rel="noopener noreferrer"><img alt="" src={require('../githubIcon.png')} style={{width: 50, height: 50, borderRadius: 50/ 2}} /></a>
                            <a href="https://www.youtube.com/watch?v=OiHhsv1bP4Q" target="_blank" rel="noopener noreferrer"><img alt="" src={require('../youtube.png')} style={{width: 50, height: 50, borderRadius: 50/ 2,marginLeft:10}} /></a>
                            <p style={{ color:'gray',fontSize:20,fontWeight:'bold' }}>A Quotes App based on the Favourite Quotes Api.The quotes are classified
                                under various categories.Animation has been implemented while displaying the quotes and the author name.</p>
                            <img alt="" className='flutterImage' src={require('../quotes1.png')} />
                            <img alt="" className='flutterImage' src={require('../quotes2.png')} />
                            <img alt="" className='flutterImage' src={require('../quotes3.png')} />
                            <img alt="" className='flutterImage' src={require('../quotes4.png')} />
                        </div>
                        <div>
                            <p style={{ color:'black',fontSize:30,fontWeight:'bold' }}>Abhishek Times News App</p>
                            <a href="https://github.com/sabhishek78/newyork_times_clone_starter" target="_blank" rel="noopener noreferrer"><img alt="" src={require('../githubIcon.png')} style={{width: 50, height: 50, borderRadius: 50/ 2}} /></a>
                            <a href="https://www.youtube.com/watch?v=jEI2iuo7RYc" target="_blank" rel="noopener noreferrer"><img alt="" src={require('../youtube.png')} style={{width: 50, height: 50, borderRadius: 50/ 2,marginLeft:10}} /></a>
                            <p style={{ color:'gray',fontSize:20,fontWeight:'bold' }}>A News App based on news api. The news is classified as per country. On clicking a particular news
                            item the corresponding news item and image is displayed</p>
                            <img alt="" className='flutterImage' src={require('../nyt1.png')} />
                            <img alt="" className='flutterImage' src={require('../nyt2.png')} />
                            <img alt="" className='flutterImage' src={require('../nyt3.png')} />
                            <img alt="" className='flutterImage' src={require('../nyt4.png')} />
                        </div>
                        <div>
                            <p style={{ color:'black',fontSize:30,fontWeight:'bold' }}>Movies App</p>
                            <a href="https://github.com/sabhishek78/movie_web_page_layout" target="_blank" rel="noopener noreferrer"><img alt="" src={require('../githubIcon.png')} style={{width: 50, height: 50, borderRadius: 50/ 2}} /></a>
                            <a href="https://github.com/sabhishek78/tic_tac_toe_starter" target="_blank" rel="noopener noreferrer"><img alt="" src={require('../youtube.png')} style={{width: 50, height: 50, borderRadius: 50/ 2,marginLeft:10}} /></a>
                            <p style={{ color:'gray',fontSize:20,fontWeight:'bold' }}>A Movies Desktop App based on the TMDB Rest api. The user
                            can search for a particular movie title.The user can click on a particular movie to view the movie details.</p>
                            <img alt="" className='desktopImage' src={require('../movies1.jpg')} />
                            <img alt="" className='desktopImage' src={require('../movies1.jpg')} />
                            <img alt="" className='desktopImage' src={require('../movies1.jpg')} />

                        </div>
                        <div>
                            <p style={{ color:'black',fontSize:30,fontWeight:'bold' }}>McLaren Times Desktop App</p>
                            <p style={{ color:'gray',fontSize:20,fontWeight:'bold' }}>Desktop Version of a News App based on Hacker Times api.
                            Different section types of the news are generated dynamically depending upon the type of stories. Separate sections
                            have been implemented for Historic and Hacker News Network Stories.</p>
                            <a href="https://github.com/sabhishek78/tic_tac_toe_starter" target="_blank" rel="noopener noreferrer"><img alt="" src={require('../youtube.png')} style={{width: 50, height: 50, borderRadius: 50/ 2,marginLeft:10}} /></a>
                            <img alt="" className='desktopImage' src={require('../hackerTimesDesktop1.jpg')} />
                            <img alt="" className='desktopImage' src={require('../hackerTimesDesktop2.jpg')} />
                            <img alt="" className='desktopImage' src={require('../hackerTimesDesktop3.jpg')} />
                        </div>
                        <div>
                            <p style={{ color:'black',fontSize:30,fontWeight:'bold' }}>Desktop Quiz App</p>
                            <a href="https://github.com/sabhishek78/quiz_webapp_starter" target="_blank" rel="noopener noreferrer"><img alt="" src={require('../githubIcon.png')} style={{width: 50, height: 50, borderRadius: 50/ 2}} /></a>
                            <a href="https://www.youtube.com/watch?v=yF2gD1WuYxc" target="_blank" rel="noopener noreferrer"><img alt="" src={require('../youtube.png')} style={{width: 50, height: 50, borderRadius: 50/ 2,marginLeft:10}} /></a>
                            <p style={{ color:'gray',fontSize:20,fontWeight:'bold' }}>Desktop Version of a Quiz App.The quiz features a timer and at the end
                            of the quiz results are displayed. Confetti has been used.</p>
                            <img alt="" className='desktopImage' src={require('../quiz1.jpg')} />
                            <img alt="" className='desktopImage' src={require('../quiz3.jpg')} />
                            <img alt="" className='desktopImage' src={require('../quiz4.jpg')} />
                        </div>
                        <div>
                            <p style={{ color:'black',fontSize:30,fontWeight:'bold' }}>Mark Down Editor</p>
                            <a href="https://github.com/sabhishek78/mark_down_editor" target="_blank" rel="noopener noreferrer"><img alt="" src={require('../githubIcon.png')} style={{width: 50, height: 50, borderRadius: 50/ 2}} /></a>
                            <a href="https://www.youtube.com/watch?v=lUO3Ps5wAZs" target="_blank" rel="noopener noreferrer"><img alt="" src={require('../youtube.png')} style={{width: 50, height: 50, borderRadius: 50/ 2,marginLeft:10}} /></a>
                            <p style={{ color:'gray',fontSize:20,fontWeight:'bold' }}>Desktop Version of a Markdown Editor where the editor converts
                            user entered markdown text to simple text.</p>
                            <img alt="" className='desktopImage' src={require('../markdown.jpg')} />

                        </div>
                        <div>
                            <p style={{ color:'black',fontSize:30,fontWeight:'bold' }}>Count Down Timer</p>
                            <a href="https://github.com/sabhishek78/count_down_timer" target="_blank" rel="noopener noreferrer"><img alt="" src={require('../githubIcon.png')} style={{width: 50, height: 50, borderRadius: 50/ 2}} /></a>
                            <a href="https://www.youtube.com/watch?v=Pc2_5dDPpCA" target="_blank" rel="noopener noreferrer"><img alt="" src={require('../youtube.png')} style={{width: 50, height: 50, borderRadius: 50/ 2,marginLeft:10}} /></a>
                            <p style={{ color:'gray',fontSize:20,fontWeight:'bold' }}>A Timer Application where the user can set multiple countdown timers.Each
                                timer is added as a separate react component.When the timer expires the components are unmounted.</p>
                            <img alt="" className='desktopImage' src={require('../timer.jpg')} />

                        </div>
                        <div>
                            <p style={{ color:'black',fontSize:30,fontWeight:'bold' }}>CRM App</p>
                            <p style={{ color:'black',fontSize:30,fontWeight:'bold' }}>Frontend</p>
                            <a href="https://github.com/sabhishek78/react_form" target="_blank" rel="noopener noreferrer"><img alt="" src={require('../githubIcon.png')} style={{width: 50, height: 50, borderRadius: 50/ 2}} /></a>
                            <a href="https://github.com/sabhishek78/tic_tac_toe_starter" target="_blank" rel="noopener noreferrer"><img alt="" src={require('../youtube.png')} style={{width: 50, height: 50, borderRadius: 50/ 2,marginLeft:10}} /></a>
                            <p style={{ color:'black',fontSize:30,fontWeight:'bold' }}>Backend</p>
                            <a href="https://github.com/sabhishek78/customer_backend" target="_blank" rel="noopener noreferrer"><img alt="" src={require('../githubIcon.png')} style={{width: 50, height: 50, borderRadius: 50/ 2}} /></a>
                            <a href="https://github.com/sabhishek78/tic_tac_toe_starter" target="_blank" rel="noopener noreferrer"><img alt="" src={require('../youtube.png')} style={{width: 50, height: 50, borderRadius: 50/ 2,marginLeft:10}} /></a>
                            <p style={{ color:'gray',fontSize:20,fontWeight:'bold' }}>A Customer Records Application with a front end implemented in React and a backend
                            implemented in MongoDB.The customer has the options to Login/SignUp and add/delete/update his customer records.</p>
                            <img alt="" className='desktopImage' src={require('../crm1.jpg')} />
                            <img alt="" className='desktopImage' src={require('../crm2.jpg')} />
                            <img alt="" className='desktopImage' src={require('../crm3.jpg')} />
                        </div>
                    </div>
                    <div>
                        <div id='about'>
                            <p style={{ color:'black',fontSize:50,fontWeight:'bold' }}>ABOUT ME </p>
                            <p style={{ color:'gray',fontSize:30,fontWeight:'bold',font: 'Dancing Script' }}>Lets break the ice a little</p>
                            <img alt=""  src={require('../profilepic.jpg')} style={{width: 400, height: 400, borderRadius: 400/ 2}} />
                            <p style={{ color:'gray',fontSize:30 }}>ReactJS | Flutter | Node JS</p>
                            <a href="https://github.com/sabhishek78" target="_blank" rel="noopener noreferrer"><img alt="" src={require('../githubIcon.png')} style={{width: 50, height: 50, borderRadius: 50/ 2,margin:20}} /></a>
                            <a href="https://www.facebook.com/abhishekshrivastava78" target="_blank" rel="noopener noreferrer"><img alt="" src={require('../facebookIcon.webp')} style={{width: 50, height: 50, borderRadius: 50/ 2,margin:20}} /></a>
                            <a href="https://www.linkedin.com/in/sabhishek78" target="_blank" rel="noopener noreferrer"><img alt="" src={require('../linkedinIcon.png')} style={{width: 50, height: 50, borderRadius: 50/ 2,margin:20}} /></a>
                            <p style={{ color:'gray',fontSize:30 }}>Hi there! I am a Fullstack developer specialized in  Flutter ,React and Node.js.</p>
                            <p style={{ color:'gray',fontSize:20 }}>Below you will find a list of some of my skills.</p>
                            <p style={{ color:'black',fontSize:40,fontWeight:'bold' }}>FRONTEND</p>
                            <img alt="" src={require('../jsLogo.jpg')} style={{width: 100, height: 100,margin:5}} />
                            <img alt=""  src={require('../flutter.png')} style={{width: 100, height: 100,margin:5}} />
                            <img alt="" src={require('../dart.png')} style={{width: 100, height: 100,margin:5}} />
                            <img alt="" src={require('../reactLogo.png')} style={{width: 100, height: 100,margin:5}} />
                            <img alt="" src={require('../htmlLogo.png')} style={{width: 100, height: 100,margin:5}} />
                            <img alt="" src={require('../cssLogo.png')} style={{width: 100, height: 100,margin:5}} />
                            <p style={{ color:'black',fontSize:40,fontWeight:'bold' }}>BACKEND</p>
                            <img alt="" src={require('../npm-226037.png')} style={{width: 100, height: 100,margin:5}} />
                            <img alt="" src={require('../nodejs.png')} style={{width: 100, height: 100,margin:5}} />
                            <p style={{ color:'black',fontSize:40,fontWeight:'bold' }}>DATABASES</p>
                            <img alt="" src={require('../firebaseLogo.png')} style={{width: 100, height: 100,margin:5}} />
                            <img alt="" src={require('../mongodb.webp')} style={{width: 100, height: 100,margin:5}} />
                            <img alt="" src={require('../aws_logo.png')} style={{width: 100, height: 100,margin:5}} />
                        </div>
                    </div>
                </div>
                    <div id='contact' style={{ backgroundImage: `url(${require("../world.jpg")})` }}>
                        <p style={{ color:'white',fontSize:50,fontWeight:'bold' }}>CONTACT ME </p>
                        <p style={{ color:'white',fontSize:20,fontWeight:'bold' }}>I would love to hear from you. </p>
                        <div className="whatsapp">
                            <a href="https://wa.me/919713219321" target="_blank" rel="noopener noreferrer"><img alt="" src={require('../whatsapp.webp')} style={{width: 50, height: 50, borderRadius: 50/ 2}}/></a>
                            <p style={{ color:'white',fontSize:20,fontWeight:'bold' }}>+919713219321</p>
                        </div>

                        <form
                            onSubmit={this.submitForm}
                            action="https://formspree.io/xpzyjaqe"
                            method="POST"
                        >
                            <div style={{margin:20}}>
                                <label style={{color:'white'}}>Name:</label>
                                <input type="name" name="name" style={{width:200,height:30}}/>
                            </div>
                            <div style={{margin:20}}>
                            <label style={{color:'white'}}>Email:</label>
                            <input type="email" name="email" style={{width:200,height:30}}/>
                            </div>
                            <div style={{margin:20}}>
                            <label style={{color:'white'}}>Mssg:</label>
                            <input type="text" name="message" style={{width:200,height:100}} />
                            </div>
                            <div>
                                {status === "SUCCESS" ? <p style={{color:'lightgreen'}}>Thanks!</p> : <button style={{margin:20,width:60}}>Submit</button>}
                                {status === "ERROR" && <p style={{color:'red'}}>Ooops! There was an error.</p>}
                            </div>
                        </form>
                    </div>
            </div>
            );
        }
}
export default HomePage