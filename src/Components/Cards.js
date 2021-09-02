import React from 'react'
import CardItem from './CardItem'
import './Cards.css'

function cards() {
     return (
          <div className="cards">
               <h1>check out these epic destinations</h1>
               <div className="card__containers">
                    <div className="cards__wrappers">
                         <ul className="cards__items">
                              <CardItem
                                   src='images/img-2.jpg'
                                   text='travle through the islands of bali in a luxury private cruise'
                                   label='luxury'
                                   path='/services'
                              />
                         </ul>
                         <ul className="cards__items">
                              <CardItem
                                   src='images/img-9.jpg'
                                   text='Explore the hidden waterfall deep inside the amzon jungle'
                                   label='adventure'
                                   path='/services'
                              />

                              <CardItem
                                   src='images/img-1.jpg'
                                   text='cross the mountains of Andes '
                                   label='adventure'
                                   path='/services'
                              />
                         </ul>
                         <ul className="cards__items">
                              <CardItem
                                   src='images/img-3.jpg'
                                   text='Set sail in the atlantic ocean visiting uncharted waters'
                                   label='adventure'
                                   path='/services'
                              />
                              <CardItem
                                   src='images/img-4.jpg'
                                   text='experience football on the islands of bali'
                                   label='arenaline'
                                   path='/services'
                              />
                         </ul>
                         <ul className="cards__items">
                              <CardItem
                                   src='images/img-8.jpg'
                                   text='Ride through the sahara on a guided camel tour'
                                   label='adventure'
                                   path='/services'
                              />
                              <CardItem
                                   src='images/img-2.jpg'
                                   text='travle through the islands of bali in a luxury private cruise'
                                   label='luxury'
                                   path='/services'
                              />
                         </ul>
                    </div>
               </div>
          </div>
     )
}

export default cards
