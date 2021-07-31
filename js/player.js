window.onSpotifyWebPlaybackSDKReady = () => {
    const token = 'BQCfBiz3zGxls4B6F9fUcdvxALT2hEuEyBY1BFkX_A9kDbt5ZJYqDTs1H7mLxuvzqouqGm3ohyyRB2GtAAWBjUOQ7cNkkpjjdDDl-aFibveVkm-_XlmGjyxERT_UGZ8w7-ulTjLsd6VtzkJvf5mxjysRbUdncunRCl0j-JA';
    const player = new Spotify.Player({
      name: 'Web Playback SDK Quick Start Player',
      getOAuthToken: cb => { cb(token); }
    });
  
    // Error handling
    player.addListener('initialization_error', ({ message }) => { console.error(message); });
    player.addListener('authentication_error', ({ message }) => { console.error(message); });
    player.addListener('account_error', ({ message }) => { console.error(message); });
    player.addListener('playback_error', ({ message }) => { console.error(message); });
  
    // Playback status updates
    player.addListener('player_state_changed', state => { console.log(state); });
  
    // Ready
    player.addListener('ready', ({ device_id }) => {
      console.log('Ready with Device ID', device_id);
      
      

    });
  
    // Not Ready
    player.addListener('not_ready', ({ device_id }) => {
      console.log('Device ID has gone offline', device_id);
    });
  
    // Connect to the player!
    player.connect();

      
  };