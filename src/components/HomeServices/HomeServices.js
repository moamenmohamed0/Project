import React from "react";
import "./HomeServices.scss";
import Header from "../Header/Header";
function HomeServices() {
  return (
    <div>
      <section className="inline large">
      <div className="grid fixed fixed-max-sm grid-xs-1">
        <h2 className="f3 text-bold">Popular Searches</h2> 
        <div className="grid fixed grid-xs-1 grid-md-4">
          <div className="flex">
            <a href="https://www.movoto.com/homeservices/search/?query=tv%20mounting&amp;zip_code=94102&amp;utm_content=v3">
              <picture className="img-bg">
                <img className="corner lazyload img-load-error" src="https://pi2.movoto.com/1.9.114/novaimgs/vimages/homeservices/popular/tv-mounting@2x.jpg"/>
              </picture> 
              <div className="popular-searches__title f5 text-bold">TV Mounting</div> 
              <div className="popular-searches__subtitle"><i class="fa fa-map-marker"></i> Search pros near you</div></a></div>
              <div className="flex">
                  <a href="https://www.movoto.com/homeservices/search/?query=movers&amp;zip_code=94102&amp;utm_content=v3">
                    <picture className="img-bg">
                      <img className="corner lazyload img-load-error" src="https://pi2.movoto.com/1.9.114/novaimgs/vimages/homeservices/popular/movers@2x.jpg"/>
                    </picture> 
                    <div className="popular-searches__title f5 text-bold">Movers</div> 
                    <div className="popular-searches__subtitle">
                      <i class="fa fa-map-marker"></i> Search pros near you</div>
                  </a>
              </div>
              <div className="flex">
                <a href="https://www.movoto.com/homeservices/search/?query=house%20cleaning&amp;zip_code=94102&amp;utm_content=v3">
                  <picture className="img-bg"><img className="corner lazyload img-load-error" src="https://pi2.movoto.com/1.9.114/novaimgs/vimages/homeservices/popular/house-cleaning@2x.jpg"/></picture> 
                  <div className="popular-searches__title f5 text-bold">House Cleaning</div> 
                  <div className="popular-searches__subtitle">
                    <i class="fa fa-map-marker"></i> Search pros near you
                  </div>
                </a>
              </div>
              <div className="flex">
                <a href="https://www.movoto.com/homeservices/search/?query=junk%20removal&amp;zip_code=94102&amp;utm_content=v3">
                  <picture className="img-bg">
                    <img className="corner lazyload img-load-error" src="https://pi2.movoto.com/1.9.114/novaimgs/vimages/homeservices/popular/junk-removal@2x.jpg"/>
                  </picture> 
                  <div className="popular-searches__title f5 text-bold">Junk Removal</div> 
                  <div className="popular-searches__subtitle"><i class="fa fa-map-marker"></i> Search pros near you</div>
                </a>
              </div>
            </div>
          </div>
    </section>
    <section class="inline large">
    <div class="grid fixed fixed-max-sm grid-xs-1">
    <h2 class="f3 wrap text-bold">Top Categories</h2> 
    <ul class="grid fixed grid-xs-1 grid-md-5">
       <li>
       <a href="https://www.movoto.com/homeservices/search/?query=plumbing&amp;zip_code=94102&amp;utm_content=v3" class="inline flex vertical bg-white corner outline center">
       <div>
       <picture class="flex">
       <img class="circle large flex middle lazyload img-load-error" src="https://pi2.movoto.com/1.9.114/novaimgs/vimages/homeservices/top/plumbing.jpg"/>
       </picture>
       </div> 
       <div class="text-center text-bold multipleline-2">Plumbing</div>
       </a>
       </li>
       <li>
       <a href="https://www.movoto.com/homeservices/search/?query=heating%20and%20cooling&amp;zip_code=94102&amp;utm_content=v3" class="inline flex vertical bg-white corner outline center">
       <div>
       <picture class="flex">
       <img class="circle large flex middle lazyload img-load-error" src="https://pi2.movoto.com/1.9.114/novaimgs/vimages/homeservices/top/heating-cooling.jpg"/>
       </picture>
       </div> 
       <div class="text-center text-bold multipleline-2">
       Heating &amp; Cooling
       </div>
       </a>
       </li>
       <li>
       <a href="https://www.movoto.com/homeservices/search/?query=roofing&amp;zip_code=94102&amp;utm_content=v3" class="inline flex vertical bg-white corner outline center">
       <div>
       <picture class="flex">
       <img class="circle large flex middle lazyload img-load-error" src="https://pi2.movoto.com/1.9.114/novaimgs/vimages/homeservices/top/roofing.jpg"/>
       </picture></div> 
       <div class="text-center text-bold multipleline-2">Roofing</div></a></li><li>
       <a href="https://www.movoto.com/homeservices/search/?query=landscaping&amp;zip_code=94102&amp;utm_content=v3" class="inline flex vertical bg-white corner outline center">
       <div>
       <picture class="flex">
       <img class="circle large flex middle lazyload img-load-error" src="https://pi2.movoto.com/1.9.114/novaimgs/vimages/homeservices/top/landscaping.jpg"/>
       </picture></div>
      <div class="text-center text-bold multipleline-2">Landscaping</div></a></li><li>
      <a href="https://www.movoto.com/homeservices/search/?query=electrical&amp;zip_code=94102&amp;utm_content=v3" class="inline flex vertical bg-white corner outline center"><div><picture class="flex">
      <img class="circle large flex middle lazyload img-load-error" src="https://pi2.movoto.com/1.9.114/novaimgs/vimages/homeservices/top/electrical.jpg"/>
      </picture></div> <div class="text-center text-bold multipleline-2">Electrical</div></a></li><li><a href="https://www.movoto.com/homeservices/search/?query=carpentry&amp;zip_code=94102&amp;utm_content=v3" class="inline flex vertical bg-white corner outline center"><div><picture class="flex"><img class="circle large flex middle lazyload img-load-error" src="https://pi2.movoto.com/1.9.114/novaimgs/vimages/homeservices/top/carpentry.jpg"/></picture></div> <div class="text-center text-bold multipleline-2">Carpentry</div></a></li><li><a href="https://www.movoto.com/homeservices/search/?query=concrete%20and%20masonry&amp;zip_code=94102&amp;utm_content=v3" class="inline flex vertical bg-white corner outline center"><div><picture class="flex"><img class="circle large flex middle lazyload img-load-error" src="https://pi2.movoto.com/1.9.114/novaimgs/vimages/homeservices/top/concrete-masonry.jpg"/></picture></div> <div class="text-center text-bold multipleline-2">Concrete &amp; Masonry</div></a></li><li><a href="https://www.movoto.com/homeservices/search/?query=drywall%20and%20insulation&amp;zip_code=94102&amp;utm_content=v3" class="inline flex vertical bg-white corner outline center"><div><picture class="flex"><img class="circle large flex middle lazyload img-load-error" src="https://pi2.movoto.com/1.9.114/novaimgs/vimages/homeservices/top/drywall-insulation.jpg"/></picture></div> <div class="text-center text-bold multipleline-2">Drywall &amp; Insulation</div></a></li><li><a href="https://www.movoto.com/homeservices/search/?query=flooring&amp;zip_code=94102&amp;utm_content=v3" class="inline flex vertical bg-white corner outline center"><div><picture class="flex"><img class="circle large flex middle lazyload img-load-error" src="https://pi2.movoto.com/1.9.114/novaimgs/vimages/homeservices/top/flooring.jpg"/></picture></div> <div class="text-center text-bold multipleline-2">Flooring</div></a></li><li><a href="https://www.movoto.com/homeservices/search/?query=windows%20and%20doors&amp;zip_code=94102&amp;utm_content=v3" class="inline flex vertical bg-white corner outline center"><div><picture class="flex"><img class="circle large flex middle lazyload img-load-error" src="https://pi2.movoto.com/1.9.114/novaimgs/vimages/homeservices/top/windows-doors.jpg"/></picture></div> <div class="text-center text-bold multipleline-2">Windows &amp; Doors</div></a></li></ul></div>
      </section>
    <section>
      <div class="inline welcome large grid fixed fixed-max-sm middle grid-xs-1 grid-sm-2 corner bg-default"><div>
        <img class="panel-img object-contain lazyload img-load-success" src="https://pi2.movoto.com/1.9.114/novaimgs/vimages/homeservices/phone-lockup@2x.png"/>
        </div> 
        <div class="flex vertical large top center">
          <h3 class="f3 text-bold">Want up-to-date maintenance alerts?</h3> 
          <p>Get tailored recommendations for your home. Stay up-to-date on maintenance to avoid costly repairs.</p> 
          <div><form autocomplete="off" action="javascript:void(0)">
            <div class="input right input-geo large default">
              <input type="text" placeholder="Enter Your Home Address" autocomplete="disabled"/> 
              <a class="btn active main" href="javascript:;" id="inputgeo-searchicon">Get Started</a>
              </div></form></div></div></div>
              </section>
    </div>
  );
}

export default HomeServices;
