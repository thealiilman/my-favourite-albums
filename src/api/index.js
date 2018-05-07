import * as defMay from '../assets/images/def-may.jpg';
import * as theBalcony from '../assets/images/the-balcony.jpg';
import * as asYouWere from '../assets/images/as-you-were.jpg';
import * as bestOfKeane from '../assets/images/best-of-keane.jpg';
import * as stHouseOnFire from '../assets/images/s-t-house-on-fire.jpg';
import * as morningGlory from '../assets/images/morning-glory.jpg';
import * as forCryingOutLoud from '../assets/images/for-crying-out-loud.jpg';
import * as myHeadIsAnAnimal from '../assets/images/my-head-is-an-animal.jpg';
import * as beHereNow from '../assets/images/be-here-now.jpg';
import * as theWave from '../assets/images/the-wave.jpg';
import * as theStoneRoses from '../assets/images/the-stone-roses.jpg';
import * as unsongs from '../assets/images/unsongs.jpg';
import * as theMasterplan from '../assets/images/the-masterplan.jpg';

const albums = [
  {
    artist: 'Oasis',
    albumName: 'Definitely Maybe',
    albumArtwork: defMay,
    releaseDate: '29 August 1994',
    singles: ['Supersonic', 'Shakermaker', 'Live Forever', 'Cigarettes & Alcohol', 'Rock \'n\' Roll Star'],
    trackListing: [
      'Rock \'n\' Roll Star', 'Shakermaker', 'Live Forever',
      'Up In the Sky', 'Columbia', 'Supersonic',
      'Bring It On Down', 'Cigarettes & Alcohol', 'Digsy\'s Dinner',
      'Slide Away', 'Married With Children',
    ],
  },
  {
    artist: 'Catfish and the Bottlemen',
    albumName: 'The Balcony',
    albumArtwork: theBalcony,
    releaseDate: '15 September 2014',
    singles: ['Homesick', 'Rango', 'Kathleen', 'Fallout', 'Cocoon', 'Pacifier', 'Hourglass'],
    trackListing: [
      'Homesick', 'Kathleen', 'Cocoon',
      'Fallout', 'Pacifier', 'Hourglass',
      'Business', '26', 'Rango',
      'Sidewinder', 'Tyrants',
    ],
  },
  {
    artist: 'Liam Gallagher',
    albumName: 'As You Were',
    albumArtwork: asYouWere,
    releaseDate: '6 October 2017',
    singles: ['Wall of Glass', 'Chinatown', 'For What It\'s Worth', 'Greedy Soul', 'Come Back To Me'],
    trackListing: [
      'Wall of Glass', 'Bold', 'Greedy Soul',
      'Paper Crown', 'For What It\'s Worth', 'When I\'m In Need',
      'You Better Run', 'I Get By', 'Chinatown',
      'Come Back To Me', 'Universal Gleam', 'I\'ve All I Need',
    ],
  },
  {
    artist: 'Keane',
    albumName: 'The Best of Keane',
    albumArtwork: bestOfKeane,
    releaseDate: '11 November 2013',
    singles: ['Higher Than the Sun', 'Won\'t Be Broken'],
    trackListing: [
      'Everybody\'s Changing', 'Somewhere Only We Know', 'Bend and Break',
      'Bedshaped', 'This Is the Last Time', 'Atlantic',
      'Is It Any Wonder?', 'Nothing In My Way', 'Hamburg Song',
      'Crystal Ball', 'A Bad Dream', 'Try Again',
      'Spiralling', 'Perfect Symmetry', 'My Shadow',
      'Silenced By the Night', 'Disconnected', 'Sovereign Light Cafe',
    ],
  },
  {
    artist: 'Moddi',
    albumName: 'Set the House On Fire',
    albumArtwork: stHouseOnFire,
    releaseDate: '8 March 2013',
    singles: ['House By the Sea', 'Run To the Water', 'Silhouette'],
    trackListing: [
      'Heim', 'House By the Sea', 'Let the Spider Run Alive',
      'Soon You\'ll Be Somebody Else', 'For An Unborn', 'The Architect',
      'Run To the Water', 'Silhouette', 'One Minute More',
      'Heim igjen', 'Northern Line',
    ],
  },
  {
    artist: 'Oasis',
    albumName: '(What\'s the Story) Morning Glory?',
    albumArtwork: morningGlory,
    releaseDate: '2 October 1995',
    singles: [
      'Some Might Say', 'Roll With It', 'Morning Glory',
      'Wonderwall', 'Don\'t Look Back In Anger', 'Champagne Supernova',
    ],
    trackListing: [
      'Hello', 'Roll With It', 'Wonderwall',
      'Don\'t Look Back In Anger', 'Hey Now', 'Untitled',
      'Some Might Say', 'Cast No Shadow', 'She\'s Electric',
      'Morning Glory', 'Untitled', 'Champagne Supernova',
    ],
  },
  {
    artist: 'Kasabian',
    albumName: 'For Crying Out Loud',
    albumArtwork: forCryingOutLoud,
    releaseDate: '5 May 2017',
    singles: [
      'You\'re In Love With A Psycho', 'Are You Looking For Action?',
      'Ill Ray (The King)', 'Bless This Acid House', 'Comeback Kid',
    ],
    trackListing: [
      'Ill Ray (The King)', 'You\'re In Love With A Psycho', 'Twentyfourseven',
      'Good Fight', 'Wasted', 'Comeback Kid',
      'The Party Never Ends', 'Are You Looking For Action?', 'All Through the Night',
      'Sixteen Blocks', 'Bless This Acid House', 'Put Your Life On It',
    ],
  },
  {
    artist: 'Of Monsters and Men',
    albumName: 'My Head Is An Animal',
    albumArtwork: myHeadIsAnAnimal,
    releaseDate: '20 September 2011',
    singles: ['Little Talks', 'Dirty Paws', 'Mountain Sound', 'King And Lionheart'],
    trackListing: [
      'Dirty Paws', 'King And Lionheart', 'Mountain Sound',
      'Slow And Steady', 'From Finner', 'Little Talks',
      'Six Weeks', 'Love Love Love', 'Your Bones',
      'Sloom', 'Lakehouse', 'Yellow Light',
    ],
  },
  {
    artist: 'Oasis',
    albumName: 'Be Here Now',
    albumArtwork: beHereNow,
    releaseDate: '21 August 1997',
    singles: ['D\'You Know What I Mean?', 'Stand By Me', 'All Around the World'],
    trackListing: [
      'D\'You Know What I Mean?', 'My Big Mouth', 'Magic Pie',
      'Stand By Me', 'I Hope, I Think, I Know', 'The Girl In the Dirty Shirt',
      'Fade In-Out', 'Don\'t Go Away', 'Be Here Now',
      'All Around the World', 'It\'s Gettin\' Better Man(!!)', 'All Around the World (Reprise)',
    ],
  },
  {
    artist: 'Tom Chaplin',
    albumName: 'The Wave',
    albumArtwork: theWave,
    releaseDate: '14 October 2016',
    singles: ['Quicksand', 'Still Waiting', 'Solid Gold', 'See It So Clear'],
    trackListing: [
      'Still Waiting', 'Hardened Heart', 'The River',
      'Worthless Words', 'I Remember You', 'Bring the Rain',
      'Hold On To Our Love', 'Quicksand', 'Solid Gold',
      'See It So Clear', 'The Wave',
    ],
  },
  {
    artist: 'The Stone Roses',
    albumName: 'The Stone Roses',
    albumArtwork: theStoneRoses,
    releaseDate: '2 May 1989',
    singles: [
      'Elephant Stone', 'Made of Stone', 'She Bangs the Drums',
      'Fools Gold', 'I Wanna Be Adored', 'Waterfall',
      'I Am the Resurrection',
    ],
    trackListing: [
      'I Wanna Be Adored', 'She Bangs the Drums', 'Waterfall',
      'Don\'t Stop', 'Bye Bye Bad Man', 'Elizabeth My Dear',
      '(Song For My) Sugar Spun Sister', 'Made of Stone', 'Shoot You Down',
      'This Is the One', 'I Am the Resurrection',
    ],
  },
  {
    artist: 'Moddi',
    albumName: 'Unsongs',
    albumArtwork: unsongs,
    releaseDate: '15 September 2016',
    singles: [],
    trackListing: [
      'June Fourth 1989: From the Shattered Pieces of A Stone It Begins',
      'A Matter of Habit', 'Punk Prayer', 'Open Letter',
      'Army Dreamers', 'The Our Worker', 'Parrot, Goat and Rooster',
      'The Shaman and the Thief', 'Eli Geva', 'Strange Fruit',
      'Where Is My Vietnam?', 'Oh My Father, I Am Joseph',
    ],
  },
  {
    artist: 'Oasis',
    albumName: 'The Masterplan',
    albumArtwork: theMasterplan,
    releaseDate: '3 November 1998',
    singles: ['Acquiesce'],
    trackListing: [
      'Acquiesce', 'Underneath the Sky', 'Talk Tonight',
      'Going Nowhere', 'Fade Away', 'The Swamp Song',
      'I Am the Walrus', 'Listen Up', 'Rockin\' Chair',
      'Half the World Away', '(It\'s Good) To Be Free', 'Stay Young',
      'Headshrinker', 'The Masterplan',
    ],
  },
];

export default albums;
