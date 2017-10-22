import React, { Component } from 'react';
import 'material-design-lite/material.min.js';

class App extends Component {
  render() {
    return (
		<div className="demo-blog demo-blog--blogpost mdl-layout mdl-js-layout has-drawer is-upgraded">
      <main className="mdl-layout__content">
        <div className="demo-blog__posts mdl-grid">
          <div className="mdl-card mdl-shadow--4dp chat-container mdl-cell mdl-cell--12-col">
			<div className="mdl-grid width-100-per ">
			  <div className="mdl-cell mdl-cell--4-col">
					<div className="header-serach demo-card-event mdl-card mdl-shadow--2dp width-100-per">
						  <div className="mdl-card__title mdl-card--expand">
							<form action="#" className="search-form width-100-per">
							  <div className="mdl-textfield mdl-js-textfield" >
								<input className="mdl-textfield__input" type="text" id="sample1"/>
								<label className="mdl-textfield__label" for="sample1">Search</label>
							  </div>
							</form>
						  </div>
						  <div className="mdl-card__actions mdl-card--border">
							<a className="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect">
							  Harry Potter
							</a>
							<div className="mdl-layout-spacer"></div>
							<i className="material-icons">person</i>
						  </div>
					</div>
					<div className="demo-card-event mdl-card mdl-shadow--2dp width-100-per">
						<ul className="demo-list-two mdl-list" style={{margin: 0,padding: 0}}>
						  <li className="mdl-list__item mdl-list__item--two-line mdl-button mdl-js-button mdl-js-ripple-effect one-chat">
								<span className="font-align-left mdl-list__item-primary-content ">
								  <i className="material-icons mdl-list__item-avatar">person</i>
								  <span>Bryan Cranston</span>
								  <span className="mdl-list__item-sub-title hide-1line-text">some text some text some text some text</span>
								</span>
								<span className="mdl-list__item-secondary-content">
								<span className="mdl-badge" data-badge="4"></span>
								</span>
						  </li>
						  <li className="mdl-list__item mdl-list__item--two-line mdl-button mdl-js-button mdl-js-ripple-effect one-chat">
								<span className="font-align-left mdl-list__item-primary-content ">
								  <i className="material-icons mdl-list__item-avatar">person</i>
								  <span>Bryan Cranston</span>
								  <span className="mdl-list__item-sub-title hide-1line-text">some text some text some text some text</span>
								</span>
								<span className="mdl-list__item-secondary-content">
								<span className="mdl-badge" data-badge="4"></span>
								</span>
						  </li>
						  <li className="mdl-list__item mdl-list__item--two-line mdl-button mdl-js-button mdl-js-ripple-effect one-chat">
								<span className="font-align-left mdl-list__item-primary-content ">
								  <i className="material-icons mdl-list__item-avatar">person</i>
								  <span>Bryan Cranston</span>
								  <span className="mdl-list__item-sub-title hide-1line-text">some text some text some text some text</span>
								</span>
								<span className="mdl-list__item-secondary-content">
								<span className="mdl-badge" data-badge="4"></span>
								</span>
						  </li>
						  <li className="mdl-list__item mdl-list__item--two-line mdl-button mdl-js-button mdl-js-ripple-effect one-chat">
								<span className="font-align-left mdl-list__item-primary-content ">
								  <i className="material-icons mdl-list__item-avatar">person</i>
								  <span>Bryan Cranston</span>
								  <span className="mdl-list__item-sub-title hide-1line-text">some text some text some text some text</span>
								</span>
								<span className="mdl-list__item-secondary-content">
								<span className="mdl-badge" data-badge="4"></span>
								</span>
						  </li>
						  <li className="mdl-list__item mdl-list__item--two-line mdl-button mdl-js-button mdl-js-ripple-effect one-chat">
								<span className="font-align-left mdl-list__item-primary-content ">
								  <i className="material-icons mdl-list__item-avatar">person</i>
								  <span>Bryan Cranston</span>
								  <span className="mdl-list__item-sub-title hide-1line-text">some text some text some text some text</span>
								</span>
								<span className="mdl-list__item-secondary-content">
								<span className="mdl-badge" data-badge="4"></span>
								</span>
						  </li>
						</ul>
					</div>
				</div>
			  <div className="mdl-cell mdl-cell--8-col">
				<div className="demo-card-wide mdl-card mdl-shadow--2dp width-100-per height-100-per">
					  <div className="mdl-card__actions" style={{borderBottom: '1px solid #eaeaea'}}>
						<h2 className="mdl-card__title-text">John Bennet</h2>
					  </div>
					  <div className="msg-chat-container">
						<p className="msg msg-left container mdl-shadow--2dp">Hi.</p>
						<p className="msg msg-right container mdl-shadow--2dp">Hello.</p>
						<p className="msg msg-left container mdl-shadow--2dp">I need some favor.</p>
						<p className="msg msg-right container mdl-shadow--2dp">Some css helps?.</p>
						<p className="msg msg-left container mdl-shadow--2dp">yes.</p>
						<p className="msg msg-left container mdl-shadow--2dp"> A mobile focused responsive template that showcases image or text based blog entries, a subscription CTA, search & share links, and an expanded article page with comments, counters and bookmarking capabilities built-in.</p>
						<p className="msg msg-right container mdl-shadow--2dp"> A mobile focused responsive template that showcases image or text based blog entries, a subscription CTA, search & share links, and an expanded article page with comments, counters and bookmarking capabilities built-in.</p>
						<p className="msg msg-right container mdl-shadow--2dp">done?</p>
						<p className="msg msg-left container mdl-shadow--2dp"> A mobile focused responsive template that showcases image or text based blog entries, a subscription CTA, search & share links, and an expanded article page with comments, counters and bookmarking capabilities built-in.</p>
					  </div>
					  <div className="mdl-card__actions mdl-card--border">						
						<form action="#" className="search-form submit-form width-100-per">
						  <div className="mdl-textfield mdl-js-textfield width-100-per" >
							<input className="mdl-textfield__input" type="text" id="sample1"/>
							<label className="mdl-textfield__label" for="sample1">Search</label>
						  </div>
						  <button className="mdl-button send-button mdl-js-button mdl-button--icon">
							  <i className="material-icons">send</i>
							</button>
						</form>
					  </div>
					</div>
				</div>
			</div>
          </div>
        </div>
      </main>
      <div className="mdl-layout__obfuscator"></div>
    </div>
    );
  }
}

export default App;
