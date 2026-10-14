/*
  ─────────────────────────────────────────────────────────────
  YOUR DISCOGRAPHY
  This is the only file you need to edit to add or change releases.
  ─────────────────────────────────────────────────────────────

  Each release looks like this:

  {
    title:    "Release Title",
    type:     "album",            // "album", "ep", or "single"
    year:     2025,
    art:      "art/my-cover.jpg", // put your image in the art/ folder. Leave "" for a placeholder
    bandcamp: ``                  // your Bandcamp embed code (see below)
  }

  BANDCAMP
  On Bandcamp: open the release → Share / Embed → Embed this album (or track).
  Recommended setup, since the site already shows your cover art:
    • Size: Large   • Artwork: none   • Tracklist: on
    • Width and height roughly square, e.g. 400 × 400
  Then copy the whole <iframe ...> code and paste it between the backticks:

    bandcamp: `<iframe style="border: 0; width: 400px; height: 400px;" src="https://bandcamp.com/EmbeddedPlayer/album=1234567890/size=large/bgcol=000000/linkcol=ffffff/artwork=none/transparent=true/" seamless><a href="...">...</a></iframe>`

  Clicking the release enlarges its cover and opens the player to the right of it.
  The enlarged cover matches the player's height (between 300 and 440px), so a square
  player sits next to a square cover. On phones the player appears under the cover.
  A release with no embed yet still shows on the page, it just isn't clickable.

  Releases are shown newest first inside each group.
*/

const RELEASES = [
  // ── Albums (5) ─────────────────────────
  {
    title: "The House By The Ol' Winding Bridge ",
    type: "album",
    year: 2024,
    art: "art/thehousebytheolwindingbridge.jpg",
    bandcamp: `<iframe style="border: 0; width: 100%; height: 472px;" src="https://bandcamp.com/EmbeddedPlayer/album=3133212237/size=large/bgcol=333333/linkcol=0f91ff/artwork=none/transparent=true/" seamless><a href="https://cnicoj.bandcamp.com/album/the-house-by-the-ol-winding-bridge">The House By The Ol&#39; Winding Bridge by cnicoj</a></iframe>`
  },
  {
    title: "transmutation, of the soul.",
    type: "album",
    year: 2024,
    art: "art/transmutationofthesoul.jpg",
    bandcamp: `<iframe style="border: 0; width: 100%; height: 439px;" src="https://bandcamp.com/EmbeddedPlayer/album=234839057/size=large/bgcol=333333/linkcol=0f91ff/artwork=none/transparent=true/" seamless><a href="https://cnicoj.bandcamp.com/album/transmutation-of-the-soul">transmutation, of the soul. by cnicoj</a></iframe>`
  },
  {
    title: "Stroadborne",
    type: "album",
    year: 2023,
    art: "art/stroadborne.jpg",
    bandcamp: `<iframe style="border: 0; width: 100%; height: 472px;" src="https://bandcamp.com/EmbeddedPlayer/album=2255317323/size=large/bgcol=333333/linkcol=0f91ff/artwork=none/transparent=true/" seamless><a href="https://cnicoj.bandcamp.com/album/stroadborne">Stroadborne by cnicoj</a></iframe>`
  },
  {
    title: "Charco Mills",
    type: "album",
    year: 2022,
    art: "art/charcomills.jpg",
    bandcamp: `<iframe style="border: 0; width: 100%; height: 472px;" src="https://bandcamp.com/EmbeddedPlayer/album=1713875911/size=large/bgcol=333333/linkcol=0687f5/artwork=none/transparent=true/" seamless><a href="https://cnicoj.bandcamp.com/album/charco-mills">Charco Mills by cnicoj</a></iframe>`
  },
  {
    title: "Without God, we are alone. ",
    type: "album",
    year: 2021,
    art: "art/withoutgodwearealone.avif",
    bandcamp: `<iframe style="border: 0; width: 100%; height: 472px;" src="https://bandcamp.com/EmbeddedPlayer/album=4211374978/size=large/bgcol=333333/linkcol=0687f5/artwork=none/transparent=true/" seamless><a href="https://cnicoj.bandcamp.com/album/without-god-we-are-alone">Without God, we are alone. by cnicoj</a></iframe>`
  },

  // ── EPs (7) ────────────────────────────
  {
    title: "Depthic Lacquer",
    type: "ep",
    year: 2025,
    art: "art/depthiclacquer.jpg",
    bandcamp: `<iframe style="border: 0; width: 100%; height: 241px;" src="https://bandcamp.com/EmbeddedPlayer/album=3855797549/size=large/bgcol=333333/linkcol=0f91ff/artwork=none/transparent=true/" seamless><a href="https://cnicoj.bandcamp.com/album/depthic-lacquer">Depthic Lacquer by cnicoj</a></iframe>`
  },
  {
    title: "Scrap Trax",
    type: "ep",
    year: 2024,
    art: "art/scraptrax.jpg",
    bandcamp: `<iframe style="border: 0; width: 100%; height: 472px;" src="https://bandcamp.com/EmbeddedPlayer/album=2720331196/size=large/bgcol=333333/linkcol=0f91ff/artwork=none/transparent=true/" seamless><a href="https://cnicoj.bandcamp.com/album/scrap-trax">Scrap Trax by cnicoj</a></iframe>`
  },
  {
    title: "Electromancer",
    type: "ep",
    year: 2024,
    art: "art/electromancer.jpg",
    bandcamp: `<iframe style="border: 0; width: 400px; height: 340px;" src="https://bandcamp.com/EmbeddedPlayer/album=1192074750/size=large/bgcol=333333/linkcol=0f91ff/artwork=none/transparent=true/" seamless><a href="https://cnicoj.bandcamp.com/album/electromancer">Electromancer by cnicoj</a></iframe>`
  },
  {
    title: "Tracks From The Vault",
    type: "ep",
    year: 2022,
    art: "art/tracksfromthevault.jpg",
    bandcamp: `<iframe style="border: 0; width: 100%; height: 340px;" src="https://bandcamp.com/EmbeddedPlayer/album=1261999633/size=large/bgcol=333333/linkcol=0f91ff/artwork=none/transparent=true/" seamless><a href="https://cnicoj.bandcamp.com/album/tracks-from-the-vault-2">Tracks From The Vault by cnicoj</a></iframe>`
  },
  {
    title: "cmouttakes",
    type: "ep",
    year: 2022,
    art: "art/cmouttakes.jpg",
    bandcamp: `<iframe style="border: 0; width: 100%; height: 472px;" src="https://bandcamp.com/EmbeddedPlayer/album=1738965920/size=large/bgcol=333333/linkcol=0f91ff/artwork=none/transparent=true/" seamless><a href="https://cnicoj.bandcamp.com/album/cmouttakes">cmouttakes by cnicoj</a></iframe>`
  },
  {
    title: "destiny.017 [unmixed and unmastered]",
    type: "ep",
    year: 2022,
    art: "art/destiny017.jpg",
    bandcamp: `<iframe style="border: 0; width: 100%; height: 439px;" src="https://bandcamp.com/EmbeddedPlayer/album=2583008577/size=large/bgcol=333333/linkcol=0f91ff/artwork=none/transparent=true/" seamless><a href="https://cnicoj.bandcamp.com/album/destiny-017-unmixed-and-unmastered">destiny.017 [unmixed and unmastered] by cnicoj</a></iframe>`
  },
  {
    title: "untitled ambience",
    type: "ep",
    year: 2020,
    art: "art/untitledambience.jpg",
    bandcamp: `<iframe style="border: 0; width: 100%; height: 274px;" src="https://bandcamp.com/EmbeddedPlayer/album=2066567363/size=large/bgcol=333333/linkcol=0f91ff/artwork=none/transparent=true/" seamless><a href="https://cnicoj.bandcamp.com/album/untitled-ambience">untitled ambience by cnicoj</a></iframe>`
  },

  // ── Singles (2) ────────────────────────
  {
    title: "~ uwa uwa ~",
    type: "single",
    year: 2025,
    art: "art/uwauwa.jpg",
    bandcamp: `<iframe style="border: 0; width: 100%; height: 120px;" src="https://bandcamp.com/EmbeddedPlayer/track=414024600/size=large/bgcol=333333/linkcol=0f91ff/tracklist=false/artwork=none/transparent=true/" seamless><a href="https://cnicoj.bandcamp.com/track/uwa-uwa">~ uwa uwa ~ by cnicoj</a></iframe>`
  },
  {
    title: "Тату JUMP [LAYER 10]",
    type: "single",
    year: 2023,
    art: "art/tatyjump.jpg",
    bandcamp: `<iframe style="border: 0; width: 100%; height: 120px;" src="https://bandcamp.com/EmbeddedPlayer/track=3784481619/size=large/bgcol=333333/linkcol=0f91ff/tracklist=false/artwork=none/transparent=true/" seamless><a href="https://cnicoj.bandcamp.com/track/jump-layer-10">Тату JUMP [LAYER 10] by cnicoj</a></iframe>`
  }
];


/*
  NEW RELEASES
  The group at the top of the page. List release titles here, left to right.
  Titles must match the titles above (capital letters and extra spaces don't matter).
  These are copies: each release still shows in its own group as well.
*/
const NEW_RELEASES = [
  "Depthic Lacquer",
  "The House By The Ol' Winding Bridge",
  "transmutation, of the soul."
];


/*
  FOOTER LINKS
  Paste your full links between the quotes, e.g. "https://www.youtube.com/@yourchannel".
  While a link is empty, clicking it does nothing.
*/
const LINKS = {
  youtube: "https://youtube.com/c/cnicoj",
  instagram: "https://instagram.com/cnicoj"
};


/*
  AUDIO LOCATION
  Where the player loads your MP3s from. Right now it's the audio/ folder next to this file.
  Once the files are on Cloudflare R2, change it to your bucket's address, e.g.
  "https://audio.yourdomain.com/" (keep the slash at the end).
*/
const AUDIO_BASE = "https://music.cnicoj.com/";
