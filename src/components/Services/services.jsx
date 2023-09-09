import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Grid from '@mui/material/Grid';


const Services = () => {
  return (
    <div className="containerX">
      <br/><br/>
      <h1 className="h1 text-center" id="pageHeaderTitle">Services</h1>
      <Grid container spacing={2}>
      {/* Card 1 */}
      <Grid item xs={12} sm={6} md={3}>
        <Card sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image="https://source.unsplash.com/random/300x351/?artist,entertainmentMusician,Bands,StandupComedian,ScratchArtist,MakeupArtist,Anchors,DJ's,HairArtist,FolkArtist,MehndiArtist,Coreographers"
              alt="Artist & Entertainment"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Artist & Entertainment
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Musician, Bands, Standup Comedian, Scratch Artist, Makeup Artist, Anchors, DJ's, Hair Artist, Folk Artist, Mehndi Artist, Coreographers etc.
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
      <Card sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image="https://source.unsplash.com/random/300x351/?Resorts,DomesticHotel,InternationalHotel,BoutiqueHotels,EcoHotels,CasinoHotels,Boatels,GolfProperties"
              alt="Hotel Bookings"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
              Hotel Bookings
              </Typography>
              <Typography variant="body2" color="text.secondary">
              Resorts, Domestic Hotel, International Hotel, Boutique Hotels, Eco Hotels, Casino Hotels, Boatels, Golf Properties etc.
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>      </Grid>

      <Grid item xs={12} sm={6} md={3}>
      <Card sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image="https://source.unsplash.com/random/300x351/?WeddingCeremony"
              alt="Shadow's"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
              Shadow's
              </Typography>
              <Typography variant="body2" color="text.secondary">
              Bride Shadow, Groom Shadow, and For all the Family
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>      </Grid>
      <Grid item xs={12} sm={6} md={3}>
      <Card sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image="https://source.unsplash.com/random/300x351/?DomesticTravelBookings,InternationalTravelBookings,TrainBookings,FlightBookings,BusBookings,Drivers"
              alt="Travel Bookings & Drivers"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
              Travel Bookings & Drivers              </Typography>
              <Typography variant="body2" color="text.secondary">
              Domestic Travel Bookings, International Travel Bookings, Train Bookings, Flight Bookings, Bus Bookings, and we Provide Drivers also.
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>      </Grid>
        <Grid item xs={12} sm={6} md={3}>
        <Card sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image="https://source.unsplash.com/random/300x351/?WeddingCards,Invitaion,WeddingCardDistribution"
              alt="Invitation & E-Invitation"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
              Invitation & E-Invitation
              </Typography>
              <Typography variant="body2" color="text.secondary">
              Wedding Cards, E-Invitaion, Wedding Card Distribution etc.
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
      <Card sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image="https://source.unsplash.com/random/300x351/?RSVP,Guest,Family"
              alt="RSVP"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                RSVP
              </Typography>
              <Typography variant="body2" color="text.secondary">
              We Provide RSVP Services for your Guest Support and Family Supports as well.
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>      </Grid>

      <Grid item xs={12} sm={6} md={3}>
      <Card sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image="https://source.unsplash.com/random/300x351/?cctv,bouncers,PersonalSecuritiy"
              alt="Security"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Security
              </Typography>
              <Typography variant="body2" color="text.secondary">
              CCTV Surveillance, Personal Securities, Bouncers. Etc.
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>      </Grid>
      <Grid item xs={12} sm={6} md={3}>
      <Card sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image="https://source.unsplash.com/random/300x351/?FloralDecoration,ConceptDecoration,WeddingDecoration"
              alt="Decoration Ideas"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
              Decoration Ideas
              </Typography>
              <Typography variant="body2" color="text.secondary">
              Floral Designers, Concept Designers etc.
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>      </Grid>
    </Grid>
    <br/>
              
        <article className="postcard dark blue">
          <a className="postcard__img_link" href="#">
            <img className="postcard__img" src="https://source.unsplash.com/random/300x351/?Food,Beverages" alt="Image Title" />
          </a>
          <div className="postcard__text">
            <h1 className="postcard__title blue">Food & Beverages Assistance</h1>
            <div className="postcard__bar"></div>
            <div className="postcard__preview-txt">
              We Provide all Types of Food and Beverages Assistance.
            </div>
          </div>
        </article>
                
        <article className="postcard dark yellow">
          <a className="postcard__img_link" href="#">
            <img className="postcard__img" src="https://source.unsplash.com/random/300x351/?GuestManagement,GuestWelcome,GuestAssistance,Welcome,Decoration,WeddingGuests" alt="Image Title" />
          </a>
          <div className="postcard__text">
            <h1 className="postcard__title yellow">Hospitality</h1>
            <div className="postcard__bar"></div>
            <div className="postcard__preview-txt">
              Guest Management, Guest Welcome, Guest Assistance etc.
            </div>
          </div>
        </article>
                
        <article className="postcard dark green">
          <a className="postcard__img_link" href="#">
            <img className="postcard__img" src="https://source.unsplash.com/random/300x351/?MarriageRegistration,Signature" alt="Image Title" />
          </a>
          <div className="postcard__text">
            <h1 className="postcard__title green">Marriage Registration</h1>
            <div className="postcard__bar"></div>
            <div className="postcard__preview-txt">
              We Provide Assistance for Marriage Registration.
            </div>
          </div>
        </article>
              
        <article className="postcard dark red">
          <a className="postcard__img_link" href="#">
            <img className="postcard__img" src="https://source.unsplash.com/random/300x351/?Floral,Designers,Mehendi,BridalJewellery,DressDesigner,WeddingCardDesigners" alt="Image Title" />	
          </a>
          <div className="postcard__text">
            <h1 className="postcard__title red">Designers</h1>
            <div className="postcard__bar"></div>
            <div className="postcard__preview-txt">
              Floral Designers, Mehndi Designers, Bridal Jewellery Designer, Dress Designer, Wedding Cards Designers, etc.
            </div>
          </div>
        </article>
                
        <article className="postcard dark blue">
          <a className="postcard__img_link" href="#">
            <img className="postcard__img" src="https://source.unsplash.com/random/300x351/?TraditionalPhotography,ClassicPhotography,ArtisticPhotography,Documentary,Candid,Editorial,Vintage,Aerial,FineArt,Warm,CinematicPhotography" alt="Image Title" />
          </a>
          <div className="postcard__text">
            <h1 className="postcard__title blue">Photography</h1>
            <div className="postcard__bar"></div>
            <div className="postcard__preview-txt">
              Traditional/Classic Photography, Artistic Photography, Documentary, Candid, Editorial, Vintage, Aerial, Fine Art, Warm, Cinematic Photography etc.
            </div>
          </div>
        </article>
                
        <article className="postcard dark yellow">
          <a className="postcard__img_link" href="#">
            <img className="postcard__img" src="https://source.unsplash.com/random/300x351/?Itinerary,PlaCards,LuggageTags,BrideTags,GroomTags,CustomizedTshirts,WeddingBoards" alt="Image Title" />
          </a>
          <div className="postcard__text">
            <h1 className="postcard__title yellow">Wedding Stationery</h1>
            <div className="postcard__bar"></div>
            <div className="postcard__preview-txt">
              Wedding Invitation Cards, Itinerary, Pla Cards, Luggage Tags, Bride & Groom tags, Customize T-shirts, Wedding Boards, etc.
            </div>
          </div>
        </article>
                
        <article className="postcard dark green">
          <a className="postcard__img_link" href="#">
            <img className="postcard__img" src="https://source.unsplash.com/random/300x351/?WelcomeBasket,Baskets" alt="Image Title" />
          </a>
          <div className="postcard__text">
            <h1 className="postcard__title green">Welcome Basket</h1>
            <div className="postcard__bar"></div>
            <div className="postcard__preview-txt">
              We Provide ideas for Welcome Baskets.
            </div>
          </div>
        </article>
                
        <article className="postcard dark red">
          <a className="postcard__img_link" href="#">
            <img className="postcard__img" src="https://source.unsplash.com/random/300x351/?Sounds,Lights,ledpaar,truss,ledscreen,djconsole,mics" alt="Image Title" />	
          </a>
          <div className="postcard__text">
            <h1 className="postcard__title red">Technical Support</h1>
            <div className="postcard__bar"></div>
            <div className="postcard__preview-txt">
              Sounds, Lights, LED Paar, Truss, LED Screen, DJ Console, Mics etc.
            </div>
          </div>
        </article>
                
        <article className="postcard dark blue">
          <a className="postcard__img_link" href="#">
            <img className="postcard__img" src="https://source.unsplash.com/random/300x351/?Specialeffects,ColdPyro,HandPyro,ColourMines,CO2Jet,StageFireMachine,PyroGun " alt="Image Title" />
          </a>
          <div className="postcard__text">
            <h1 className="postcard__title blue">Special Effects</h1>
            <div className="postcard__bar"></div>
            <div className="postcard__preview-txt">
              Cold Pyro, Hand Pyro, Colour Mines, CO2 Jet, Stage Fire Machine, Pyro Gun etc.
            </div>
          </div>
        </article>
        
        {/* Add more articles for other services here */}
      </div>
    );
  };
  
  export default Services;
  