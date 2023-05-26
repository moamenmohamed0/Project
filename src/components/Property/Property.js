import axios from 'axios'
import { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useLocation
} from "react-router-dom"


const Block = {display: "block"};
const W_100 = {width: 100};
const config = {
  headers:{
    'Access-Control-Allow-Origin': '*',
  }
};

const Property = ({task,deleteTask,onToggle}) => {
    const location = useLocation()
    const queryParameters = new URLSearchParams(location.search)
    console.log("Data");
    const [Data,setData] = useState([]);
    const fetchExcuse = () => {
         axios.get(`http://localhost:5000/properties/6470c092d62e74cb2ab9b3ef/`,config).then(
        (res) => {
            console.log(res)
            setData(res.data);
        }
        )
        .catch(err => {
            console.log(err);
        // some error handling
      });;
    };
    useEffect(()=>{
        fetchExcuse();
    },[])
    console.log(Data)
    return (
        <div className="App">
            <div className="inspiry_show_on_doc_ready rh_prop_search rh_prop_search_init" style={Block}>
                                
                                   
                                
            </div>
            <section className="rh_section rh_wrap--padding rh_wrap--topPadding">
                <div className="rh_page rh_page--fullWidth">
                    <div className="rh_page__head rh_page__property">
                                    <div className="rh_page__property_title">
                                        <img className="only-for-print inspiry-qr-code" src="https://chart.googleapis.com/chart?cht=qr&amp;chs=90x90&amp;chl=https://modern.realhomes.io/property/home-in-merrick-way/&amp;choe=UTF-8" alt="Home in Merrick Way"/>
                                        <div className="page-breadcrumbs page-breadcrumbs-modern">
                                            <nav className="property-breadcrumbs">
                                                <ul>
                                                    <li> <a href="https://modern.realhomes.io/">Home</a><i className="breadcrumbs-separator fas fa-angle-right"></i></li>
                                                    <li> <a href="https://modern.realhomes.io/property-city/miami/">Miami</a></li>
                                                </ul>
                                            </nav>
                                        </div>

                                        <h1 className="rh_page__title">Home in {Data.address}</h1>

                                        <p className="rh_page__property_address">
                                            {Data.address}, {Data.city}, FL {Data.postal}, {Data.country} </p>

                                    </div>

                                    <div className="rh_page__property_price">
                                        <p className="status">
                                            For Sale </p>
                                        <p className="price">
                                            {Data.price} </p>
                                    </div>
                    </div>
                    <div className="rh_property">
                        <div className="property-detail-slider-wrapper clearfix">
                            <div className="inspiry_property_masonry_style images_7">
                                <a className="slider-img" style={{backgroundImage:"url('https://modern.b-cdn.net/wp-content/uploads/2017/06/exterior-05-1240x720.jpg')"}}  data-fancybox="gallery" href="https://modern.b-cdn.net/wp-content/uploads/2017/06/exterior-05.jpg" data-thumb="https://modern.b-cdn.net/wp-content/uploads/2017/06/exterior-05.jpg"></a>
                                <a className="slider-img" style={{backgroundImage:"url('https://modern.b-cdn.net/wp-content/uploads/2017/06/living-00-1240x720.jpg')"}} data-fancybox="gallery" href="https://modern.b-cdn.net/wp-content/uploads/2017/06/living-00.jpg" data-thumb="https://modern.b-cdn.net/wp-content/uploads/2017/06/living-00.jpg"></a><a className="slider-img" style={{backgroundImage:"url('https://modern.b-cdn.net/wp-content/uploads/2017/06/bedroom-03-1240x720.jpg')"}} data-fancybox="gallery" href="https://modern.b-cdn.net/wp-content/uploads/2017/06/bedroom-03.jpg" data-thumb="https://modern.b-cdn.net/wp-content/uploads/2017/06/bedroom-03.jpg"><span>See All Photos (7)</span></a><a className="slider-img" style={{backgroundImage:"url('https://modern.b-cdn.net/wp-content/uploads/2017/06/dining-00-1240x720.jpg')"}} data-fancybox="gallery" href="https://modern.b-cdn.net/wp-content/uploads/2017/06/dining-00.jpg" data-thumb="https://modern.b-cdn.net/wp-content/uploads/2017/06/dining-00.jpg"></a><a className="slider-img" style={{backgroundImage:"url('https://modern.b-cdn.net/wp-content/uploads/2017/06/bedroom-02-1240x720.jpg')"}} data-fancybox="gallery" href="https://modern.b-cdn.net/wp-content/uploads/2017/06/bedroom-02.jpg" data-thumb="https://modern.b-cdn.net/wp-content/uploads/2017/06/bedroom-02.jpg"></a><a className="slider-img" style={{backgroundImage:"url('https://modern.b-cdn.net/wp-content/uploads/2017/06/bathroom-02-1240x720.jpg')"}} data-fancybox="gallery" href="https://modern.b-cdn.net/wp-content/uploads/2017/06/bathroom-02.jpg" data-thumb="https://modern.b-cdn.net/wp-content/uploads/2017/06/bathroom-02.jpg"><span>See All Photos (7)</span></a>
                                <a className="slider-img" style={{backgroundImage:"url('https://modern.b-cdn.net/wp-content/uploads/2017/06/bathroom-04-1240x720.jpg')"}} data-fancybox="gallery" href="https://modern.b-cdn.net/wp-content/uploads/2017/06/bathroom-04.jpg" data-thumb="https://modern.b-cdn.net/wp-content/uploads/2017/06/bathroom-04.jpg"></a>
                            </div>
                        </div>
                        <div className="print-property-gallery only-for-print">
                            <img src="https://modern.b-cdn.net/wp-content/uploads/2017/06/exterior-05-1240x720.jpg" alt="exterior-05"/>
                            <img src="https://modern.b-cdn.net/wp-content/uploads/2017/06/living-00-1240x720.jpg" alt=""/>
                            <img src="https://modern.b-cdn.net/wp-content/uploads/2017/06/bedroom-03-1240x720.jpg" alt=""/>
                            <img src="https://modern.b-cdn.net/wp-content/uploads/2017/06/dining-00-1240x720.jpg" alt=""/>
                            <img src="https://modern.b-cdn.net/wp-content/uploads/2017/06/bedroom-02-1240x720.jpg" alt="bedroom-02"/>
                            <img src="https://modern.b-cdn.net/wp-content/uploads/2017/06/bathroom-02-1240x720.jpg" alt=""/>
                            <img src="https://modern.b-cdn.net/wp-content/uploads/2017/06/bathroom-04-1240x720.jpg" alt=""/>
                        </div>
                        <div className="rh_property__wrap rh_property--padding">
                                        <div className="rh_property__main">
                                            <div id="property-content" className="rh_property__content clearfix">
                                                <div id="property-content-section-overview" className="property-content-section property-overview">
                                                    <div className="rh_property__row rh_property__meta rh_property--borderBottom">
                                                        <div className="rh_property__id">
                                                            <p className="title">Property ID:</p>
                                                            <p className="id">
                                                                &nbsp;{Data._id} </p>
                                                        </div>
                                                        <div className="rh_property__print">
                                                            <a href="#" className="share" id="social-share" data-tooltip="Share">
                                                                
                                                            </a>
                                                            <div className="share-this sharer-0" data-check-mobile="" data-property-name="Home in Merrick Way" data-property-permalink="https://modern.realhomes.io/property/home-in-merrick-way/" style={Block}><label className="entypo-export"><span>Share</span></label><div className="social load bottom center networks-5"><ul><li className="entypo-pinterest" data-network="pinterest"></li><li className="entypo-twitter" data-network="twitter"></li><li className="entypo-facebook" data-network="facebook"></li><li className="entypo-paper-plane" data-network="email"></li><li className="inspiry_whats_app_share"><a className="fab fa-whatsapp inspiry_whats_app_share_link" href="https://api.whatsapp.com/send?text=Home%20in%20Merrick%20Way%20https%3A%2F%2Fmodern.realhomes.io%2Fproperty%2Fhome-in-merrick-way%2F" target="_blank"></a></li> </ul></div></div>
                                                            <span className="favorite-btn-wrap favorite-btn-45">
                                                                <span className="favorite-placeholder highlight__red hide user_not_logged_in" data-propertyid="45" data-tooltip="Added to favorites">
                                                                    <svg xmlnsDefault="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 21">
                                                                        <path className="rh_svg" d="M1089.48,1923.98a6.746,6.746,0,0,1,9.54,9.54L1089,1943l-10.02-9.48a6.746,6.746,0,0,1,9.54-9.54A0.641,0.641,0,0,0,1089.48,1923.98Z" transform="translate(-1077 -1922)"></path>
                                                                    </svg>
                                                                </span>
                                                                <a href="#" className="favorite add-to-favorite user_not_logged_in" data-propertyid="45" data-tooltip="Add to favorites">
                                                                    <svg xmlnsDefault="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 21">
                                                                        <path className="rh_svg" d="M1089.48,1923.98a6.746,6.746,0,0,1,9.54,9.54L1089,1943l-10.02-9.48a6.746,6.746,0,0,1,9.54-9.54A0.641,0.641,0,0,0,1089.48,1923.98Z" transform="translate(-1077 -1922)"></path>
                                                                    </svg>							
                                                                </a>
                                                            </span>
                                                            <span className="rh_single_compare_button add-to-compare-span compare-btn-45" data-property-id="45" data-property-title="Home in Merrick Way" data-property-url="https://modern.realhomes.io/property/home-in-merrick-way/" data-property-image="https://modern.b-cdn.net/wp-content/uploads/2017/06/exterior-05-488x326.jpg">
                                                                <span className="compare-placeholder highlight hide" data-tooltip="Added to compare">
                                                                    <svg xmlnsDefault="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                                                        <path d="M1144,1942l-8,1v3l-7-5,7-5v3l8,1A1,1,0,0,1,1144,1942Zm-22-14,8,1v3l7-5-7-5v3l-8,1A1,1,0,0,0,1122,1928Z" transform="translate(-1121 -1922)"></path>
                                                                    </svg>
                                                                </span>
                                                                <a className="rh_trigger_compare add-to-compare" data-tooltip="Add to compare" href="https://modern.realhomes.io/property/home-in-merrick-way/">
                                                                    <svg xmlnsDefault="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                                                        <path d="M1144,1942l-8,1v3l-7-5,7-5v3l8,1A1,1,0,0,1,1144,1942Zm-22-14,8,1v3l7-5-7-5v3l-8,1A1,1,0,0,0,1122,1928Z" transform="translate(-1121 -1922)"></path>
                                                                    </svg>
                                                                </a>
                                                            </span>
                                                            <a href="javascript:window.print()" className="print" data-tooltip="Print">
                                                                
                                                            </a>
                                                        </div>
                                                    </div>
                                                    <div className="rh_property__row rh_property__meta_wrap">
                                                        <div className="rh_property__meta prop_bedrooms">
                                                            <span className="rh_meta_titles">
                                                                Bedrooms
                                                            </span>
                                                            <div>
                                                                <svg className="rh_svg" xmlnsDefault="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                                                    <path d="M1111.91,600.993h16.17a2.635,2.635,0,0,1,2.68,1.773l1.21,11.358a2.456,2.456,0,0,1-2.61,2.875h-18.73a2.46,2.46,0,0,1-2.61-2.875l1.21-11.358A2.635,2.635,0,0,1,1111.91,600.993Zm0.66-7.994h3.86c1.09,0,2.57.135,2.57,1l0.01,3.463c0.14,0.838-1.72,1.539-2.93,1.539h-4.17c-1.21,0-2.07-.7-1.92-1.539l0.37-3.139A2.146,2.146,0,0,1,1112.57,593Zm11,0h3.86a2.123,2.123,0,0,1,2.2,1.325l0.38,3.139c0.14,0.838-.72,1.539-1.93,1.539h-5.17c-1.21,0-2.07-.7-1.92-1.539L1121,594C1121,593.1,1122.48,593,1123.57,593Z" transform="translate(-1108 -593)"></path>
                                                                </svg>
                                                                <span className="figure">{Data.rooms}</span>
                                                            </div>
                                                        </div>
                                                        <div className="rh_property__meta prop_bathrooms">
                                                            <span className="rh_meta_titles">
                                                                Bathrooms            
                                                            </span>
                                                            <div>
                                                                <svg className="rh_svg" xmlnsDefault="http://www.w3.org/2000/svg" width="23.69" height="24" viewBox="0 0 23.69 24">
                                                                    <path d="M1204,601a8,8,0,0,1,16,0v16h-2V601a6,6,0,0,0-12,0v1h-2v-1Zm7,6a6,6,0,0,0-12,0h12Zm-6,2a1,1,0,0,1,1,1v1a1,1,0,0,1-2,0v-1A1,1,0,0,1,1205,609Zm0,5a1,1,0,0,1,1,1v1a1,1,0,0,1-2,0v-1A1,1,0,0,1,1205,614Zm4.94-5.343a1,1,0,0,1,1.28.6l0.69,0.878a1,1,0,0,1-1.88.685l-0.69-.879A1,1,0,0,1,1209.94,608.657Zm2.05,4.638a1,1,0,0,1,1.28.6l0.35,0.94a1.008,1.008,0,0,1-.6,1.282,1,1,0,0,1-1.28-.6l-0.35-.939A1.008,1.008,0,0,1,1211.99,613.295Zm-11.93-4.638a1,1,0,0,1,.6,1.282l-0.69.879a1,1,0,1,1-1.87-.682l0.68-.88A1,1,0,0,1,1200.06,608.657Zm-2.05,4.639a1,1,0,0,1,.6,1.281l-0.34.941a1,1,0,0,1-1.88-.683l0.34-.94A1,1,0,0,1,1198.01,613.3Z" transform="translate(-1196.31 -593)"></path>
                                                                </svg>
                                                                <span className="figure">{Data.baths}</span>
                                                            </div>
                                                        </div>

                                                        
                                                       
                                                        
                                                        <div className="rh_property__meta prop_lot_size">
                                                            <span className="rh_meta_titles">
                                                                Lot Size 
                                                        </span>
                                                            <div>
                                                                <svg width="24" height="24" xmlnsDefault="http://www.w3.org/2000/svg">
                                                                    <g>
                                                                    <rect fill="none" height="26" width="26" y="-1" x="-1"></rect>
                                                                    </g>
                                                                    <g>
                                                                    <rect x="1" y="1" id="svg_1" width="32" height="32" fill="none"></rect>
                                                                    <path className="rh_svg" stroke="null" fill="#1ea69a" id="svg_2" d="m23.952237,12l-4.482089,-4.170255l0,2.78017l-1.49403,0l0,-4.170255l-4.482089,0l0,-1.390085l2.988059,0l-4.482089,-4.170255l-4.482089,4.170255l2.988059,0l0,1.390085l-4.482089,0l0,4.170255l-1.49403,0l0,-2.78017l-4.482089,4.170255l4.482089,4.170255l0,-2.78017l1.49403,0l0,4.170255l4.482089,0l0,1.390085l-2.988059,0l4.482089,4.170255l4.482089,-4.170255l-2.988059,0l0,-1.390085l4.482089,0l0,-4.170255l1.49403,0l0,2.78017l4.482089,-4.170255zm-7.470148,4.170255l-8.964178,0l0,-8.34051l8.964178,0l0,8.34051z"></path>
                                                                    </g>
                                                                </svg> 
                                                                <span className="figure">
                                                                    {Data.size}
                                                                </span>
                                                                <span className="label">
                                                                    Sq Ft	
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div id="property-content-section-content" className="property-content-section">
                                                    <h4 className="rh_property__heading">Description </h4>
                                                    <div className="rh_content">

                                                        <p>{Data.description}</p>
                                                    </div>
                                                </div>
                                                <div id="property-content-section-additional-details" className="property-content-section">
                                                    <h4 className="rh_property__heading rh_property__additional_details">Additional Details</h4>
                                                    <div className="rh-property-additional-inner-wrap">
                                                        <ul className="rh_property__additional clearfix">
                                                            <li>
                                                                <span className="title">BEDROOM FEATURES:</span>
                                                                <span className="value">{Data.bedroomFeature}</span>
                                                            </li>
                                                            <li>
                                                                <span className="title">DINING AREA:</span>
                                                                <span className="value">{Data.diningArea}</span>
                                                            </li>
                                                            <li>
                                                                <span className="title">DOORS &amp; WINDOWS:</span>
                                                                <span className="value">{Data.doorsWindows}</span>
                                                            </li>
                                                            <li>
                                                                <span className="title">ENTRY LOCATION:</span>
                                                                <span className="value">{Data.entryLocation}</span>
                                                            </li>
                                                            <li>
                                                                <span className="title"></span>
                                                                <span className="value">{Data.exteriorConstruction}</span>
                                                            </li>
                                                            <li>
                                                                <span className="title">FLOORS:</span>
                                                                <span className="value">{Data.floors}</span>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="rh_property__common_note">
                                                    <h4 className="rh_property__heading">Common Note</h4>
                                                    <div className="rh-property-note-inner-wrap">
                                                        <p>This is a sample note to share some basic information on all properties. This note can be enabled or disabled from Real Homes settings and its text plus label is fully customizable.</p>
                                                    </div>
                                                </div>
                                                <div id="property-content-section-features" className="property-content-section rh_property__features_wrap">
                                                    <h4 className="rh_property__heading">Features</h4>
                                                    <div className="rh-property-features-inner-wrap">
                                                        <ul className="rh_property__features arrow-bullet-list">
                                                            <li className="rh_property__feature" id="rh_property__feature_17"><span className="rh_done_icon">
                                                                
    </span><a href="https://modern.realhomes.io/property-feature/2-stories/">2 Stories</a></li>
                                                            <li className="rh_property__feature" id="rh_property__feature_19"><span className="rh_done_icon">
                                                                </span><a href="https://modern.realhomes.io/property-feature/bike-path/">Bike Path</a></li>
                                                            <li className="rh_property__feature" id="rh_property__feature_20"><span className="rh_done_icon">
                                                                </span><a href="https://modern.realhomes.io/property-feature/central-cooling/">Central Cooling</a></li>
                                                            <li className="rh_property__feature" id="rh_property__feature_21"><span className="rh_done_icon">
                                                                </span><a href="https://modern.realhomes.io/property-feature/central-heating/">Central Heating</a></li>
                                                            <li className="rh_property__feature" id="rh_property__feature_23"><span className="rh_done_icon">
                                                                </span><a href="https://modern.realhomes.io/property-feature/dual-sinks/">Dual Sinks</a></li>
                                                            <li className="rh_property__feature" id="rh_property__feature_24"><span className="rh_done_icon">
                                                                </span><a href="https://modern.realhomes.io/property-feature/electric-range/">Electric Range</a></li>
                                                            <li className="rh_property__feature" id="rh_property__feature_27"><span className="rh_done_icon">
                                                                </span><a href="https://modern.realhomes.io/property-feature/fire-place/">Fire Place</a></li>
                                                            <li className="rh_property__feature" id="rh_property__feature_30"><span className="rh_done_icon">
                                                                </span><a href="https://modern.realhomes.io/property-feature/home-theater/">Home Theater</a></li>
                                                            <li className="rh_property__feature" id="rh_property__feature_33"><span className="rh_done_icon">
                                                                </span><a href="https://modern.realhomes.io/property-feature/laundry-room/">Laundry Room</a></li>
                                                            <li className="rh_property__feature" id="rh_property__feature_34"><span className="rh_done_icon">
                                                                </span><a href="https://modern.realhomes.io/property-feature/lawn/">Lawn</a></li>
                                                            <li className="rh_property__feature" id="rh_property__feature_35"><span className="rh_done_icon">
                                                                </span><a href="https://modern.realhomes.io/property-feature/marble-floors/">Marble Floors</a></li>
                                                            <li className="rh_property__feature" id="rh_property__feature_43"><span className="rh_done_icon">
                                                                </span><a href="https://modern.realhomes.io/property-feature/swimming-pool/">Swimming Pool</a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                
                                                <div id="property-content-section-attachments" className="property-content-section rh_property__attachments_wrap">
                                                    <h4 className="rh_property__heading">Property Attachments</h4>
                                                    <div className="rh-property-attachments-inner-wrap">
                                                        <ul className="rh_property__attachments">
                                                            <li className="docx"><a target="_blank" href="https://modern.b-cdn.net/wp-content/uploads/2017/06/demo.docx"><i className="far fa-file-word"></i>Demo Word Document</a></li>
                                                            <li className="pdf"><a target="_blank" href="https://modern.b-cdn.net/wp-content/uploads/2017/06/demo.pdf"><i className="far fa-file-pdf"></i>Demo PDF Document</a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div id="property-content-section-energy-performance" className="property-content-section rh_property__energy_performance_wrap">
                                                    <h4 className="rh_property__heading">Energy Performance</h4>
                                                    <div className="energy-performance">
                                                        <ul style={{borderColor:"#8dc643"}} className="epc-details clearfix class-b">
                                                            <li>
                                                                <strong>Energy Class:</strong>
                                                                <span>B</span>
                                                            </li>
                                                            <li>
                                                                <strong>Energy Performance:</strong>
                                                                <span>82 kWh/m²a</span>
                                                            </li>
                                                            <li>
                                                                <strong><abbr title="Energy Performance Certificate">EPC</abbr> Current Rating:</strong>
                                                                <span></span>
                                                            </li>
                                                            <li>
                                                                <strong><abbr title="Energy Performance Certificate">EPC</abbr> Potential Rating:</strong>
                                                                <span>86</span>
                                                            </li>
                                                        </ul>
                                                        <ul className="energy-class">
                                                            <li className="a+" style={{backgroundColor:"#00845a"}}>A+</li>
                                                            <li className="a" style={{backgroundColor:"#18b058"}}>A</li>
                                                            <li className="current B" style={{backgroundColor:"#8dc643"}}><span style={{borderTopColor:"#8dc643"}}></span>B</li>
                                                            <li className="c" style={{backgroundColor:"#ffcc01"}}>C</li>
                                                            <li className="d" style={{backgroundColor:"#f6ac63"}}>D</li>
                                                            <li className="e" style={{backgroundColor:"#f78622"}}>E</li>
                                                            <li className="f" style={{backgroundColor:"#ef1d3a"}}>F</li>
                                                            <li className="g" style={{backgroundColor:"#d10400"}}>G</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div id="property-content-section-video" className="property-content-section rh_property__video">
                                                    <h4 className="rh_property__heading">Property Video</h4>
                                                    <div className="rh-property-videos-slider-inner-wrap">
                                                        <div className="rh_wrapper_property_videos_slider flexslider">
                                                            <ul className="slides">
                                                                <li style={Block}>
                                                                    <div className="rh_property_video">
                                                                        <div className="rh_property_video_inner">
                                                                            <h5 className="rh_video_title">Video Tour</h5>
                                                                            <a data-fancybox="" href="https://www.youtube.com/watch?v=PkjpPQxknPg" className="inspiry-lightbox-item" data-autoplay="true" data-vbtype="video">
                                                                                <div className="play-btn"></div>
                                                                                <img src="https://modern.b-cdn.net/wp-content/uploads/2017/06/exterior-05-818x417.jpg" alt="Home in Merrick Way"/> </a>
                                                                        </div>
                                                                    </div>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div id="property-content-section-virtual-tour" className="property-content-section rh_property__virtual_tour">
                                                    <h4 className="rh_property__heading">Virtual Tour</h4>
                                                    <div className="rh-property-virtual-tour-inner-wrap">
                                                        <iframe src="https://my.matterport.com/show/?m=JGPnGQ6hosj&amp;play=1" width="100%" height="auto" allowvr="" allowfullscreen="allowfullscreen"></iframe> </div>
                                                </div>
                                                
                                            </div>

                                            {/* <section className="rh_property__similar_properties">
                                                <h3 className="rh_property__heading">Similar Properties</h3>
                                                <div id="similar-properties-filters-wrapper" className="similar-properties-filters-wrapper"><a className="rh-btn rh-btn-secondary current" href="#recommended" data-similar-properties-filter="recommended">Recommended</a><a className="rh-btn rh-btn-primary" href="#property-feature" data-similar-properties-filter="property-feature">Property Features</a>
                                                    <a className="rh-btn rh-btn-primary" href="#property-type" data-similar-properties-filter="property-type">Property Type</a><a className="rh-btn rh-btn-primary" href="#property-city" data-similar-properties-filter="property-city">Property Location</a><a className="rh-btn rh-btn-primary" href="#property-status" data-similar-properties-filter="property-status">Property Status</a>
                                                        <a className="rh-btn rh-btn-primary" href="#property-agent" data-similar-properties-filter="property-agent">Property Agent</a>
                                                </div>
                                                <div id="similar-properties-wrapper" className="similar-properties-wrapper">
                                                    <div className="rh-loader">
                                                        <div></div>
                                                        <div></div>
                                                        <div></div>
                                                        <div></div>
                                                    </div>
                                                    <div id="similar-properties" className="rh_property__container rh_similar_properties_box">

                                                        <article className="rh_prop_card rh_prop_card--listing">

                                                            <div className="rh_prop_card__wrap">


                                                                <figure className="rh_prop_card__thumbnail">
                                                                    <div className="rh_figure_property_one">
                                                                        <a href="https://modern.realhomes.io/property/villa-in-coral-gables/">
                        <img width="680" height="510" src="https://modern.b-cdn.net/wp-content/uploads/2017/06/exterior-04-680x510.jpg" className="attachment-modern-property-child-slider size-modern-property-child-slider wp-post-image" alt="Villa" decoding="async"/>                </a>

                                                                        <div className="rh_overlay"></div>
                                                                        <div className="rh_overlay__contents rh_overlay__fadeIn-bottom">
                                                                            <a href="https://modern.realhomes.io/property/villa-in-coral-gables/">View Property</a>
                                                                        </div>

                                                                    </div>
                                                                    <div className="rh_prop_card__btns">
                                                                        <span className="favorite-btn-wrap favorite-btn-101">
                                <span className="favorite-placeholder highlight__red hide user_not_logged_in" data-propertyid="101" data-tooltip="Added to favorites">
                                    <svg xmlnsDefault="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 21">
    <path className="rh_svg" d="M1089.48,1923.98a6.746,6.746,0,0,1,9.54,9.54L1089,1943l-10.02-9.48a6.746,6.746,0,0,1,9.54-9.54A0.641,0.641,0,0,0,1089.48,1923.98Z" transform="translate(-1077 -1922)"></path>
    </svg>							</span>
                                                                        <a href="#" className="favorite add-to-favorite user_not_logged_in" data-propertyid="101" data-tooltip="Add to favorites">
                                    <svg xmlnsDefault="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 21">
    <path className="rh_svg" d="M1089.48,1923.98a6.746,6.746,0,0,1,9.54,9.54L1089,1943l-10.02-9.48a6.746,6.746,0,0,1,9.54-9.54A0.641,0.641,0,0,0,1089.48,1923.98Z" transform="translate(-1077 -1922)"></path>
    </svg>							</a>
                                                                        </span>
                                                                        <span className="add-to-compare-span compare-btn-101" data-property-id="101" data-property-title="Villa in Coral Gables" data-property-url="https://modern.realhomes.io/property/villa-in-coral-gables/" data-property-image="https://modern.b-cdn.net/wp-content/uploads/2017/06/exterior-04-488x326.jpg">
                        <span className="compare-placeholder highlight hide" data-tooltip="Added to compare">
                            <svg xmlnsDefault="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
    <path d="M1144,1942l-8,1v3l-7-5,7-5v3l8,1A1,1,0,0,1,1144,1942Zm-22-14,8,1v3l7-5-7-5v3l-8,1A1,1,0,0,0,1122,1928Z" transform="translate(-1121 -1922)"></path>
    </svg>
                        </span>
                                                                        <a className="rh_trigger_compare add-to-compare" href="https://modern.realhomes.io/property/villa-in-coral-gables/" data-tooltip="Add to compare">
                            <svg xmlnsDefault="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
    <path d="M1144,1942l-8,1v3l-7-5,7-5v3l8,1A1,1,0,0,1,1144,1942Zm-22-14,8,1v3l7-5-7-5v3l-8,1A1,1,0,0,0,1122,1928Z" transform="translate(-1121 -1922)"></path>
    </svg>
                        </a>
                                                                        </span>
                                                                    </div>
                                                                </figure>

                                                                <div className="rh_prop_card__details">

                                                                    <h3>
                                                                        <a href="https://modern.realhomes.io/property/villa-in-coral-gables/">Villa in Coral Gables</a>
                                                                    </h3>

                                                                    <p className="rh_prop_card__excerpt">Enjoy serenity of Deering Bay whole day from this spectacular…</p>
                                                                    

                                                                    <div className="rh_prop_card__meta_wrap">

                                                                        <div className="rh_prop_card_meta_theme_stylish">
                                                                            <div className="rh_prop_card__meta">
                                                                                <span className="rh_meta_titles">Bedrooms</span>
                                                                                <div className="rh_meta_icon_wrapper">
                                                                                    <svg className="rh_svg" xmlnsDefault="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
    <defs>
    </defs>
    <path d="M1111.91,600.993h16.17a2.635,2.635,0,0,1,2.68,1.773l1.21,11.358a2.456,2.456,0,0,1-2.61,2.875h-18.73a2.46,2.46,0,0,1-2.61-2.875l1.21-11.358A2.635,2.635,0,0,1,1111.91,600.993Zm0.66-7.994h3.86c1.09,0,2.57.135,2.57,1l0.01,3.463c0.14,0.838-1.72,1.539-2.93,1.539h-4.17c-1.21,0-2.07-.7-1.92-1.539l0.37-3.139A2.146,2.146,0,0,1,1112.57,593Zm11,0h3.86a2.123,2.123,0,0,1,2.2,1.325l0.38,3.139c0.14,0.838-.72,1.539-1.93,1.539h-5.17c-1.21,0-2.07-.7-1.92-1.539L1121,594C1121,593.1,1122.48,593,1123.57,593Z" transform="translate(-1108 -593)"></path>
    </svg>
                                                                                    <span className="figure">{Data.beds}</span>
                                                                                </div>
                                                                            </div>
                                                                            <div className="rh_prop_card__meta">
                                                                                <span className="rh_meta_titles">Bathrooms</span>
                                                                                <div className="rh_meta_icon_wrapper">
                                                                                    <svg className="rh_svg" xmlnsDefault="http://www.w3.org/2000/svg" width="23.69" height="24" viewBox="0 0 23.69 24">
    <path d="M1204,601a8,8,0,0,1,16,0v16h-2V601a6,6,0,0,0-12,0v1h-2v-1Zm7,6a6,6,0,0,0-12,0h12Zm-6,2a1,1,0,0,1,1,1v1a1,1,0,0,1-2,0v-1A1,1,0,0,1,1205,609Zm0,5a1,1,0,0,1,1,1v1a1,1,0,0,1-2,0v-1A1,1,0,0,1,1205,614Zm4.94-5.343a1,1,0,0,1,1.28.6l0.69,0.878a1,1,0,0,1-1.88.685l-0.69-.879A1,1,0,0,1,1209.94,608.657Zm2.05,4.638a1,1,0,0,1,1.28.6l0.35,0.94a1.008,1.008,0,0,1-.6,1.282,1,1,0,0,1-1.28-.6l-0.35-.939A1.008,1.008,0,0,1,1211.99,613.295Zm-11.93-4.638a1,1,0,0,1,.6,1.282l-0.69.879a1,1,0,1,1-1.87-.682l0.68-.88A1,1,0,0,1,1200.06,608.657Zm-2.05,4.639a1,1,0,0,1,.6,1.281l-0.34.941a1,1,0,0,1-1.88-.683l0.34-.94A1,1,0,0,1,1198.01,613.3Z" transform="translate(-1196.31 -593)"></path>
    </svg>
                                                                                    <span className="figure">3.5</span>
                                                                                </div>
                                                                            </div>
                                                                            <div className="rh_prop_card__meta">
                                                                                <span className="rh_meta_titles">Area</span>
                                                                                <div className="rh_meta_icon_wrapper">
                                                                                
                                                                                    <span className="figure">3500</span>
                                                                                    <span className="label">Sq Ft</span>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>


                                                                    <div className="rh_prop_card__priceLabel">

                                                                        <span className="rh_prop_card__status">
                        For Sale				</span>


                                                                        <p className="rh_prop_card__price">
                                                                            $825,000
                                                                        </p>

                                                                    </div>

                                                                </div>

                                                            </div>

                                                        </article>

                                                        <article className="rh_prop_card rh_prop_card--listing">

                                                            <div className="rh_prop_card__wrap">

                                                                <div className="rh_label rh_label__property_grid">
                                                                    <div className="rh_label__wrap">
                                                                        Featured <span></span>
                                                                    </div>
                                                                </div>

                                                                <figure className="rh_prop_card__thumbnail">
                                                                    <div className="rh_figure_property_one">
                                                                        <a href="https://modern.realhomes.io/property/home-in-coral-gables/">
                        <img width="680" height="510" src="https://modern.b-cdn.net/wp-content/uploads/2020/06/exterior-00-680x510.jpg" className="attachment-modern-property-child-slider size-modern-property-child-slider wp-post-image" alt="" decoding="async" loading="lazy"/>                </a>

                                                                        <div className="rh_overlay"></div>
                                                                        <div className="rh_overlay__contents rh_overlay__fadeIn-bottom">
                                                                            <a href="https://modern.realhomes.io/property/home-in-coral-gables/">View Property</a>
                                                                        </div>

                                                                    </div>
                                                                    <div className="rh_prop_card__btns">
                                                                        <span className="favorite-btn-wrap favorite-btn-42">
                                <span className="favorite-placeholder highlight__red hide user_not_logged_in" data-propertyid="42" data-tooltip="Added to favorites">
                                    <svg xmlnsDefault="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 21">
    <path className="rh_svg" d="M1089.48,1923.98a6.746,6.746,0,0,1,9.54,9.54L1089,1943l-10.02-9.48a6.746,6.746,0,0,1,9.54-9.54A0.641,0.641,0,0,0,1089.48,1923.98Z" transform="translate(-1077 -1922)"></path>
    </svg>							</span>
                                                                        <a href="#" className="favorite add-to-favorite user_not_logged_in" data-propertyid="42" data-tooltip="Add to favorites">
                                    <svg xmlnsDefault="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 21">
    <path className="rh_svg" d="M1089.48,1923.98a6.746,6.746,0,0,1,9.54,9.54L1089,1943l-10.02-9.48a6.746,6.746,0,0,1,9.54-9.54A0.641,0.641,0,0,0,1089.48,1923.98Z" transform="translate(-1077 -1922)"></path>
    </svg>							</a>
                                                                        </span>
                                                                        <span className="add-to-compare-span compare-btn-42" data-property-id="42" data-property-title="Home in Coral Gables" data-property-url="https://modern.realhomes.io/property/home-in-coral-gables/" data-property-image="https://modern.b-cdn.net/wp-content/uploads/2020/06/exterior-00-488x326.jpg">
                        <span className="compare-placeholder highlight hide" data-tooltip="Added to compare">
                            <svg xmlnsDefault="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
    <path d="M1144,1942l-8,1v3l-7-5,7-5v3l8,1A1,1,0,0,1,1144,1942Zm-22-14,8,1v3l7-5-7-5v3l-8,1A1,1,0,0,0,1122,1928Z" transform="translate(-1121 -1922)"></path>
    </svg>
                        </span>
                                                                        <a className="rh_trigger_compare add-to-compare" href="https://modern.realhomes.io/property/home-in-coral-gables/" data-tooltip="Add to compare">
                            <svg xmlnsDefault="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
    <path d="M1144,1942l-8,1v3l-7-5,7-5v3l8,1A1,1,0,0,1,1144,1942Zm-22-14,8,1v3l7-5-7-5v3l-8,1A1,1,0,0,0,1122,1928Z" transform="translate(-1121 -1922)"></path>
    </svg>
                        </a>
                                                                        </span>
                                                                    </div>
                                                                </figure>

                                                                <div className="rh_prop_card__details">

                                                                    <h3>
                                                                        <a href="https://modern.realhomes.io/property/home-in-coral-gables/">Home in Coral Gables</a>
                                                                    </h3>

                                                                    <p className="rh_prop_card__excerpt">Elegant retreat in a quiet Coral Gables setting. This home…</p>
                                                                    

                                                                    <div className="rh_prop_card__meta_wrap">

                                                                        <div className="rh_prop_card_meta_theme_stylish">
                                                                            <div className="rh_prop_card__meta">
                                                                                <span className="rh_meta_titles">Bedrooms</span>
                                                                                <div className="rh_meta_icon_wrapper">
                                                                                    <svg className="rh_svg" xmlnsDefault="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
    <defs>
    </defs>
    <path d="M1111.91,600.993h16.17a2.635,2.635,0,0,1,2.68,1.773l1.21,11.358a2.456,2.456,0,0,1-2.61,2.875h-18.73a2.46,2.46,0,0,1-2.61-2.875l1.21-11.358A2.635,2.635,0,0,1,1111.91,600.993Zm0.66-7.994h3.86c1.09,0,2.57.135,2.57,1l0.01,3.463c0.14,0.838-1.72,1.539-2.93,1.539h-4.17c-1.21,0-2.07-.7-1.92-1.539l0.37-3.139A2.146,2.146,0,0,1,1112.57,593Zm11,0h3.86a2.123,2.123,0,0,1,2.2,1.325l0.38,3.139c0.14,0.838-.72,1.539-1.93,1.539h-5.17c-1.21,0-2.07-.7-1.92-1.539L1121,594C1121,593.1,1122.48,593,1123.57,593Z" transform="translate(-1108 -593)"></path>
    </svg>
                                                                                    <span className="figure">4</span>
                                                                                </div>
                                                                            </div>
                                                                            <div className="rh_prop_card__meta">
                                                                                <span className="rh_meta_titles">Bathrooms</span>
                                                                                <div className="rh_meta_icon_wrapper">
                                                                                    <svg className="rh_svg" xmlnsDefault="http://www.w3.org/2000/svg" width="23.69" height="24" viewBox="0 0 23.69 24">
    <path d="M1204,601a8,8,0,0,1,16,0v16h-2V601a6,6,0,0,0-12,0v1h-2v-1Zm7,6a6,6,0,0,0-12,0h12Zm-6,2a1,1,0,0,1,1,1v1a1,1,0,0,1-2,0v-1A1,1,0,0,1,1205,609Zm0,5a1,1,0,0,1,1,1v1a1,1,0,0,1-2,0v-1A1,1,0,0,1,1205,614Zm4.94-5.343a1,1,0,0,1,1.28.6l0.69,0.878a1,1,0,0,1-1.88.685l-0.69-.879A1,1,0,0,1,1209.94,608.657Zm2.05,4.638a1,1,0,0,1,1.28.6l0.35,0.94a1.008,1.008,0,0,1-.6,1.282,1,1,0,0,1-1.28-.6l-0.35-.939A1.008,1.008,0,0,1,1211.99,613.295Zm-11.93-4.638a1,1,0,0,1,.6,1.282l-0.69.879a1,1,0,1,1-1.87-.682l0.68-.88A1,1,0,0,1,1200.06,608.657Zm-2.05,4.639a1,1,0,0,1,.6,1.281l-0.34.941a1,1,0,0,1-1.88-.683l0.34-.94A1,1,0,0,1,1198.01,613.3Z" transform="translate(-1196.31 -593)"></path>
    </svg>
                                                                                    <span className="figure">4.5</span>
                                                                                </div>
                                                                            </div>
                                                                            <div className="rh_prop_card__meta">
                                                                                <span className="rh_meta_titles">Area</span>
                                                                                <div className="rh_meta_icon_wrapper">
                                                                                    
                                                                                    <span className="figure">3800</span>
                                                                                    <span className="label">Sq Ft</span>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>


                                                                    <div className="rh_prop_card__priceLabel">

                                                                        <span className="rh_prop_card__status">
                        For Sale				</span>


                                                                        <p className="rh_prop_card__price">
                                                                            $850,000
                                                                        </p>

                                                                    </div>

                                                                </div>

                                                            </div>

                                                        </article>
                                                    </div>
                                                </div>
                                            </section>

                                            <section className="rh_property__comments">
                                                <div className="property-comments">
                                                    <div id="comments">
                                                        <div className="rh_comments__header">
                                                            <h3 id="comments-title">
                                                                <i className="fas fa-comments" aria-hidden="true"></i>
                                                                1 Comment 
                                                            </h3>
                                                            <div className="inspiry_rating_right">
                                                                <div className="stars-avg-rating inspiry_stars_avg_rating">
                                                                    <span className="rating-stars">
                                                                        <i className="fas fa-star rated"></i>
                                                                        <i className="fas fa-star rated"></i>
                                                                        <i className="fas fa-star rated"></i>
                                                                        <i className="fas fa-star rated"></i>
                                                                        <i className="fas fa-star rated"></i>
                                                                    </span>
                                                                    <span className="rating-span">
                                                                        5               
                                                                        <i className="rvr_rating_down fas fa-angle-down"></i>
                                                                        Review 1            
                                                                    </span>
                                                                    <div className="inspiry_wrapper_rating_info">
                                                                        <p className="inspiry_rating_percentage">
                                                                            <span className="inspiry_rating_sorting_label">
                                                                                5 Stars  
                                                                            </span>
                                                                            <span className="inspiry_rating_line">
                                                                                <span className="inspiry_rating_line_inner" style={W_100}></span>
                                                                            </span>
                                                                            <span className="inspiry_rating_text">
                                                                                <span className="inspiry_rating_text_inner">
                                                                                    100%    
                                                                                </span>
                                                                            </span>
                                                                        </p>
                                                                        <p className="inspiry_rating_percentage">
                                                                            <span className="inspiry_rating_sorting_label">
                                                                                4 Stars
                                                                            </span>
                                                                            <span className="inspiry_rating_line">
                                                                                <span className="inspiry_rating_line_inner" style={{width:0}}></span>
                                                                            </span>
                                                                            <span className="inspiry_rating_text">
                                                                                <span className="inspiry_rating_text_inner">
                                                                                    0%
                                                                                </span>
                                                                            </span>
                                                                        </p>
                                                                        <p className="inspiry_rating_percentage">
                                                                            <span className="inspiry_rating_sorting_label">
                                                                                3 Stars
                                                                            </span>

                                                                            <span className="inspiry_rating_line">
                                    <span className="inspiry_rating_line_inner" style={{width:0}}></span>
                                                                            </span>

                                                                            <span className="inspiry_rating_text">
                                <span className="inspiry_rating_text_inner">

                                    0%                            </span>
                                                                            </span>
                                                                        </p>
                                                                        <p className="inspiry_rating_percentage">
                                                                            <span className="inspiry_rating_sorting_label">
                                    2 Stars                            </span>

                                                                            <span className="inspiry_rating_line">
                                    <span className="inspiry_rating_line_inner" style={{width:0}}></span>
                                                                            </span>

                                                                            <span className="inspiry_rating_text">
                                <span className="inspiry_rating_text_inner">

                                    0%                            </span>
                                                                            </span>
                                                                        </p>
                                                                        <p className="inspiry_rating_percentage">
                                                                            <span className="inspiry_rating_sorting_label">
                                    1 Star                            </span>

                                                                            <span className="inspiry_rating_line">
                                    <span className="inspiry_rating_line_inner" style={{width:0}}></span>
                                                                            </span>

                                                                            <span className="inspiry_rating_text">
                                <span className="inspiry_rating_text_inner">

                                    0%                            </span>
                                                                            </span>
                                                                        </p>

                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <ol className="commentlist">
                                                            <li className="comment even thread-even depth-1" id="li-comment-96">
                                                                <article id="comment-96">
                                                                    <a href="https://inspirythemes.com/"><img alt="" src="https://secure.gravatar.com/avatar/72437d09babba5f052666cc37c91f152?s=110&amp;d=mm&amp;r=g" srcset="https://secure.gravatar.com/avatar/72437d09babba5f052666cc37c91f152?s=220&amp;d=mm&amp;r=g 2x" className="avatar avatar-110 photo" height="110" width="110" loading="lazy" decoding="async"/></a>
                                                                    <div className="comment-detail-wrap">
                                                                        <span className="comment-detail-wrap-arrow"></span>
                                                                        <div className="comment-meta">
                                                                            <h5 className="author">
                                                                                <cite className="fn"><a href="https://inspirythemes.com/" rel="external nofollow ugc" className="url">John Doe</a></cite> </h5>
                                                                            <p>
                                                                                <span className="commented-on">on</span>
                                                                                <a href="https://modern.realhomes.io/property/home-in-merrick-way/#comment-96">
                                        <time datetime="2020-10-21T10:43:49+00:00">
                                            October 21, 2020 at 10:43 am                                    </time>
                                    </a>
                                                                                <span className="commented">said</span>&nbsp;&nbsp;
                                                                            </p>
                                                                        </div>
                                                                        <div className="comment-body">
                                                                            <p>This is a sample comment. We have been extremely pleased with your attentiveness, communication, honesty and advice throughout the entire process. Selling a house is a stressful occurrence
                                                                                for anyone and you have helped to make it as smooth as possible for us. We feel that you truly go beyond the general duties of a real estate agent with thorough follow ups, reporting
                                                                                and always being ‘on top’ of potential buyers.</p>
                                                                            <p><span className="rating-stars"><i className="fas fa-star rated"></i><i className="fas fa-star rated"></i><i className="fas fa-star rated"></i><i className="fas fa-star rated"></i><i className="fas fa-star rated"></i></span></p>
                                                                            <a rel="nofollow" className="comment-reply-link" href="https://modern.realhomes.io/property/home-in-merrick-way/?replytocom=96#respond" data-commentid="96" data-postid="45" data-belowelement="comment-96" data-respondelement="respond" data-replyto="Reply to John Doe" aria-label="Reply to John Doe">Reply</a> </div>
                                                                    </div>
                                                                </article>
                                                            </li>
                                                        </ol>

                                                        <div id="respond" className="comment-respond">
                                                            <h3 id="reply-title" className="comment-reply-title">Leave a Reply <small><a rel="nofollow" id="cancel-comment-reply-link" href="/property/home-in-merrick-way/#respond" style={{display:"none"}}>Cancel reply</a></small></h3>
                                                            <form action="https://modern.realhomes.io/wp-comments-post.php" method="post" id="commentform" className="comment-form">
                                                                <div className="stars-comment-rating">
                                                                    <div className="rating-box">
                                                                        <div className="br-wrapper br-theme-fontawesome-stars"><select id="rate-it" name="inspiry_rating" style={{display:"none"}}>
                            <option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5" selected="">5</option>					</select><div className="br-widget"><a href="#" data-rating-value="1" data-rating-text="1" className="br-selected"></a><a href="#" data-rating-value="2" data-rating-text="2" className="br-selected"></a><a href="#" data-rating-value="3" data-rating-text="3" className="br-selected"></a><a href="#" data-rating-value="4" data-rating-text="4" className="br-selected"></a><a href="#" data-rating-value="5" data-rating-text="5" className="br-selected br-current"></a><div className="br-current-rating">5</div></div></div>
                                                                    </div>
                                                                </div>
                                                                <p className="comment-notes"><span id="email-notes">Your email address will not be published.</span> <span className="required-field-message">Required fields are marked <span className="required">*</span></span>
                                                                </p>
                                                                <p className="comment-form-comment"><label htmlFor="comment">Comment <span className="required">*</span></label> <textarea id="comment" name="comment" cols="45" rows="8" maxlength="65525" required="required"></textarea></p>
                                                                <p className="comment-form-author"><label htmlFor="author">Name <span className="required">*</span></label> <input id="author" name="author" type="text" value="" size="30" maxlength="245" autoComplete="name" required="required"/></p>
                                                                <p className="comment-form-email"><label htmlFor="email">Email <span className="required">*</span></label> <input id="email" name="email" type="text" value="" size="30" maxlength="100" aria-describedby="email-notes" autoComplete="email" required="required"/></p>
                                                                <p className="comment-form-url"><label htmlFor="url">Website</label> <input id="url" name="url" type="text" value="" size="30" maxlength="200" autoComplete="url"/></p>
                                                                <p className="form-submit"><input name="submit" type="submit" id="submit" className="submit" value="Post Comment"/> <input type="hidden" name="comment_post_ID" value="45" id="comment_post_ID" />
                                                                    <input type="hidden" name="comment_parent" id="comment_parent" value="0"/>
                                                                </p>
                                                            </form>
                                                        </div>
                                                    </div>
                                                </div>
                                            </section> */}
                                        </div>

                                        <div className="rh_property__sidebar" data-sticky="true" data-top-gap="60" data-bottom-gap="60" style={{position:"sticky",top:'-1168px',height:'fit-content'}}>
                                            <aside className="rh_sidebar">
                                                <section className="widget rh_property_agent  ">
                                                    <a className="agent-image" href="https://modern.realhomes.io/agent/melissa-william/">
                                                        <img width="210" height="210" src="https://modern.b-cdn.net/wp-content/uploads/2015/07/agent-female-00-210x210.jpg" className="attachment-agent-image size-agent-image wp-post-image" alt="Real Estate Agent" decoding="async" loading="lazy" srcset="https://modern.b-cdn.net/wp-content/uploads/2015/07/agent-female-00-210x210.jpg 210w, https://modern.b-cdn.net/wp-content/uploads/2015/07/agent-female-00-300x300.jpg 300w, https://modern.b-cdn.net/wp-content/uploads/2015/07/agent-female-00-150x150.jpg 150w, https://modern.b-cdn.net/wp-content/uploads/2015/07/agent-female-00.jpg 514w" sizes="(max-width: 210px) 100vw, 210px"/>                
                                                    </a>
                                                    <h3 className="rh_property_agent__title">
                                                        {Data.owner.name} 
                                                        </h3>
                                                    <div className="rh_property_agent__agent_info">
                                                        <p className="contact mobile">
                                                            <span>Mobile:&nbsp;</span>
                                                            <a href="tel:1-234-456-7892">{Data.owner.telephone}</a>
                                                        </p>
                                                        
                                                        <p className="contact email">
                                                            <span>Email:&nbsp;</span>
                                                            <a href="mailto:melissa@realhomes.io">{Data.owner.email}</a>
                                                        </p>
                                                    </div>
                                                </section>
                                                
                                            </aside>
                                        </div>
                                    </div>
                    </div>
                </div>
            </section>
        </div>
    ) 
}

export default Property