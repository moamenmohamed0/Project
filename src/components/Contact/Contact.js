import React from "react";
import "./Contact.scss";
function Contact() {
  return (
    <div>
        <section className="rh_section rh_wrap rh_wrap--padding rh_wrap--topPadding">
            
   <div className="rh_page">
			
            <div className="rh_page__contact">
				                        <div className="rh_blog rh_blog__single">
							                                <article id="post-155" className="rh_blog__post">
                                    <div className="rh_content entry-content"></div>
                                </article>
							                        </div>
					                <div className="rh_contact">
                    <div className="rh_contact__wrap">
						                            <div className="rh_contact__form">
								                                        <section id="contact-form">
                                            <form className="contact-form" method="post" action="https://modern.realhomes.io/wp-admin/admin-ajax.php" novalidate="novalidate">
                                                <p className="rh_contact__input rh_contact__input_text">
                                                    <label for="name">Name</label>
                                                    <input type="text" name="name" id="name" className="required" placeholder="Your Name" title="* Please provide your name"/>
                                                </p>

                                                <p className="rh_contact__input rh_contact__input_text">
                                                    <label for="email">Email</label>
                                                    <input type="text" name="email" id="email" className="email required" placeholder="Your Email" title="* Please provide a valid email address"/>
                                                </p>

                                                <p className="rh_contact__input rh_contact__input_text">
                                                    <label for="number">Phone Number</label>
                                                    <input type="text" name="number" id="number" placeholder="Your Phone"/>
                                                </p>

                                                <p className="rh_contact__input rh_contact__input_textarea">
                                                    <label for="message">Message</label>
                                                    <textarea cols="40" rows="6" name="message" id="message" className="required" placeholder="Your Message" title="* Please provide your message"></textarea>
                                                </p>

												<p className="rh_inspiry_gdpr clearfix"><span className="gdpr-checkbox-label">GDPR Agreement <span className="required-label">*</span></span><input type="checkbox" name="gdpr" id="inspiry-gdpr" className="required" value="I consent to having this website store my submitted information so they can respond to my inquiry." title="* Please accept GDPR agreement"/><label for="inspiry-gdpr">I consent to having this website store my submitted information so they can respond to my inquiry.</label></p>                                                        <div className="rh_contact__input rh_contact__input_recaptcha inspiry-recaptcha-wrapper clearfix g-recaptcha-type-v3">
                                                            <div className="inspiry-google-recaptcha"><input type="hidden" name="g-recaptcha-response" value="03AL8dmw_hZAS0DaBB1VsYB9grnDTv6iZSaTKRSVMwNvL-WZYkZbb4Bz4obvndYAH5eTxjybWDHQ7F0wDl2Q0KgtQQN7ki6-11hrneQOpD62k4NTD0cO8VVTqQcDnwVtgomwWnVrjDuL9qiBbnTLnUy2MIiIY06AZ_p9Vz6eLcbX-KPdwcLUXENcCFFbFutNH1LppHTCk8BGnl9GKT5XNlHXaPX-Umzt8myd-wlK2wS2Imbka13zGyg18ZDmBeniOxGmhE_SDHmN4YOGN3zlXFSlgsm5HTXcBT1P75j48st61P7VhWYTOayIYP9YP0iOvo9iBb4NE6Pcmpb3pG5ByEaNmFCECxboOY9yCnivAou3bkI6h6_sKZl-GecgGzdLrhn5_9sGwxJ5kXTiHlZhAe7mvRIAbcqp0evFOtsxSZXAWhc-4lx2Eb6fXuBgAwlvPXoNaNu8ZjO9HYg8uNmNE4ZFjaFbQG-2HRnpruIe6n5-730lsEbPOOWvEh0LXBMrGKG_HWpZaaic-0YYy-hTmGC6ZxT7bS7Iwz_1S9VsfQNnnF4IacgUiw9ts"/></div>
                                                        </div>
														
                                                <p className="rh_contact__input rh_contact__submit">
                                                    <input type="submit" id="submit-button" value="Send Message" className="rh_btn rh_btn--primary" name="submit"/>
                                                    <span id="ajax-loader"></span>
                                                    <input type="hidden" name="action" value="send_message"/>
                                                    <input type="hidden" name="the_id" value="155"/>
                                                    <input type="hidden" name="nonce" value="70a0f4f1fc"/>
                                                </p>

                                                <div id="error-container"></div>
                                                <div id="message-container"></div>
                                            </form>
                                        </section>
										                            </div>
							                            <div className="rh_contact__details">

								                                    <div className="rh_contact__item">
                                        <div className="icon"></div>
                                        <p className="content">
                                            <span className="label">Phone</span><a href="tel:+123-456-789">+123-456-789                                            </a>
                                        </p>
                                    </div>
								
								                                    <div className="rh_contact__item">
                                        <div className="icon"></div>
                                        <p className="content">
                                            <span className="label">Mobile</span><a href="tel:+133-456-787">+133-456-787                                            </a>
                                        </p>
                                    </div>
								
								                                    <div className="rh_contact__item">
                                        <div className="icon"></div>
                                        <p className="content">
                                            <span className="label">Fax</span><a href="fax:+122-456-788">+122-456-788                                            </a>
                                        </p>
                                    </div>
								
								                                    <div className="rh_contact__item">
                                        <div className="icon">
</div>
                                        <p className="content">
											<span className="label">Email</span><a href="mailto:sales@yourwebsite.com">sales@yourwebsite.com</a>
                                        </p>
                                    </div>
								
								                                    <div className="rh_contact__item">
                                        <div className="icon"></div>
                                        <p className="content">
                                            <span className="label">Address</span>3015 Grand Ave, Coconut Grove, Merrick Way, FL 12345                                        </p>
                                    </div>
								
                            </div>
                            
							
                    </div>

                </div>

            </div>

        </div>
        </section>
    </div>
  );
}

export default Contact;