import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import style from './Forum.scss'
import ForumHead from './ForumHead';
import Scroll from './scroll';

class Forum extends Component {

    render() {
        return (
            <div className ={ style.main }>
            <ForumHead />
            <div class="card-group">
            <div class="card">
              <img class="card-img-top" src="https://i.ytimg.com/vi/wL5NiOc64ag/maxresdefault.jpg" alt="Card image cap" />
              <div class="card-body">
                <h5 class="card-title">PETA protest Monster hunter.</h5>
                <p class="card-text">Ooh whoa, ooh whoa, ooh whoa
                                    You know you love me, I know you care
                                    Just shout whenever and I'll be there
                                    You are my love, you are my heart
                                    And we will never, ever, ever be apart</p>
                <p class="card-text"><small class="text-muted">Timestamp here</small></p>
              </div>
            </div>
            <div class="card">
              <img class="card-img-top" src="https://media.gq.com/photos/59bac9496f3a7b240df4084d/master/w_696/mario-nip-slip.jpeg" alt="Card image cap" />
              <div class="card-body">
                <h5 class="card-title">Nipples, cool or for fools?</h5>
                <p class="card-text">Uh huh, uh huh
                                    Yeah, Rihanna
                                    Uh huh, uh huh 
                                    Good girl gone bad
                                    Uh huh, uh huh 
                                    Take three, action
                                    Uh huh, uh huh, ho</p>
                <p class="card-text"><small class="text-muted">Timestamp here</small></p>
              </div>
            </div>
            <div class="card">
              <img class="card-img-top" src="https://www.callofduty.com/content/dam/atvi/callofduty/wwii/home/Stronghold_Metadata_Image.jpg" alt="Card image cap" />
              <div class="card-body">
                <h5 class="card-title">Shoot a man 3 revealed!</h5>
                <p class="card-text">Somebody once told me the world is gonna roll me
                                    I ain't the sharpest tool in the shed
                                    She was looking kind of dumb with her finger and her thumb
                                    In the shape of an "L" on her forehead</p>
                <p class="card-text"><small class="text-muted">Timestamp here</small></p>
              </div>
            </div>
          </div>

          <div class="card-group">
            <div class="card">
              <img class="card-img-top" src="https://i.ytimg.com/vi/wL5NiOc64ag/maxresdefault.jpg" alt="Card image cap" />
              <div class="card-body">
                <h5 class="card-title">PETA protest Monster hunter</h5>
                <p class="card-text">Ooh whoa, ooh whoa, ooh whoa
You know you love me, I know you care
Just shout whenever and I'll be there
You are my love, you are my heart
And we will never, ever, ever be apart</p>
                <p class="card-text"><small class="text-muted">Timestamp here</small></p>
              </div>
            </div>
            <div class="card">
              <img class="card-img-top" src="https://media.gq.com/photos/59bac9496f3a7b240df4084d/master/w_696/mario-nip-slip.jpeg" alt="Card image cap" />
              <div class="card-body">
                <h5 class="card-title">Nipples, cool or for fools?</h5>
                <p class="card-text">Uh huh, uh huh
Yeah, Rihanna
Uh huh, uh huh 
Good girl gone bad
Uh huh, uh huh 
Take three, action
Uh huh, uh huh, ho</p>
                <p class="card-text"><small class="text-muted">Timestamp here</small></p>
              </div>
            </div>
            <div class="card">
              <img class="card-img-top" src="https://www.callofduty.com/content/dam/atvi/callofduty/wwii/home/Stronghold_Metadata_Image.jpg" alt="Card image cap" />
              <div class="card-body">
                <h5 class="card-title">Shoot a man 3 revealed</h5>
                <p class="card-text">Somebody once told me the world is gonna roll me
I ain't the sharpest tool in the shed
She was looking kind of dumb with her finger and her thumb
In the shape of an "L" on her forehead</p>
                <p class="card-text"><small class="text-muted">Timestamp here</small></p>
              </div>
            </div>
          </div>

          <div class="card-group">
            <div class="card">
              <img class="card-img-top" src="https://i.ytimg.com/vi/wL5NiOc64ag/maxresdefault.jpg" alt="Card image cap" />
              <div class="card-body">
                <h5 class="card-title">PETA protest Monster hunter</h5>
                <p class="card-text">Ooh whoa, ooh whoa, ooh whoa
You know you love me, I know you care
Just shout whenever and I'll be there
You are my love, you are my heart
And we will never, ever, ever be apart</p>
                <p class="card-text"><small class="text-muted">Timestamp here</small></p>
              </div>
            </div>
            <div class="card">
              <img class="card-img-top" src="https://media.gq.com/photos/59bac9496f3a7b240df4084d/master/w_696/mario-nip-slip.jpeg" alt="Card image cap" />
              <div class="card-body">
                <h5 class="card-title">Nipples, cool or for fools?</h5>
                <p class="card-text">Uh huh, uh huh
Yeah, Rihanna
Uh huh, uh huh 
Good girl gone bad
Uh huh, uh huh 
Take three, action
Uh huh, uh huh, ho</p>
                <p class="card-text"><small class="text-muted">Timestamp here</small></p>
              </div>
            </div>
            <div class="card">
              <img class="card-img-top" src="https://www.callofduty.com/content/dam/atvi/callofduty/wwii/home/Stronghold_Metadata_Image.jpg" alt="Card image cap" />
              <div class="card-body">
                <h5 class="card-title">Shoot a man 3 revealed</h5>
                <p class="card-text">Somebody once told me the world is gonna roll me
I ain't the sharpest tool in the shed
She was looking kind of dumb with her finger and her thumb
In the shape of an "L" on her forehead</p>
                <p class="card-text"><small class="text-muted">Timestamp here</small></p>
              </div>
            </div>
          </div>
          <Scroll />
          </div>
            

         
        )
    }
}

export default Forum;