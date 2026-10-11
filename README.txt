byte_n_burn: all-in-one app
===========================

What it is
  One installable web app (a PWA) with a Today screen and five pages:
  Career, Train (workout and food), Posts (Instagram), Money, Plan.
  It works offline once opened. Your ticks and notes are saved on the device.

Files
  index.html, manifest.webmanifest, sw.js, icons/   (keep them together)

How to put it on your Android phone (about 10 minutes, free)
  An installable app must be served over https. Pick one:

  Option A: GitHub Pages
    1. Create a new public repository on GitHub, for example byte-n-burn.
    2. Upload every file in this folder to the repository root.
    3. Settings > Pages > Source: Deploy from a branch > main > / (root) > Save.
    4. After a minute, open https://YOUR_NAME.github.io/byte-n-burn/ in Chrome on your phone.

  Option B: Netlify Drop
    1. Go to app.netlify.com/drop and drag this folder onto the page.
    2. Open the https link it gives you in Chrome on your phone.

  Then, in Chrome on the phone: menu (three dots) > Install app (or Add to Home screen).
  It opens full screen with its own icon.

Optional: a real APK
  Open pwabuilder.com, paste your https link, and choose Android. It builds an APK
  you can install directly. This is untested on my side.

Google Drive sync (optional, keeps phone and laptop in step)
  You need your own free Google client ID, because only you can create it:
    1. console.cloud.google.com > create a project.
    2. APIs and Services > Library > enable "Google Drive API".
    3. OAuth consent screen > External > add app name, your email, and add your Gmail as a Test user.
    4. Credentials > Create credentials > OAuth client ID > Web application.
    5. Authorized JavaScript origins: the address where you host the app, for example
       https://yourname.github.io  (origin only, no path, no trailing slash).
    6. Copy the client ID. In the app tap Sync (top right), paste it, press Connect and sync.
  Repeat the paste step on each device. The app stores one small file in a hidden app folder
  of your Drive and cannot see your other files.
  Limits to know:
    - Google sign-in lasts about an hour. After that the app may ask you to tap Sync now once.
    - If two devices change the same page before syncing, the two versions are merged. A tick
      you removed on one device can come back from the other.
    - Sync needs the https address, it will not work when index.html is opened as a local file.

Manual backup
  Tap Sync (top right) > Copy backup. Paste it into a note now and then.
  To restore on another phone, open the app there, tap Backup, paste, and Restore.

Updating
  Replace index.html on the host with a newer one. Open the app twice to pick it up.

Notes
  - Without Drive sync, progress is saved per device only.
  - Fonts load from Google Fonts the first time you are online, then are cached.
  - The plans and numbers inside are the ones from our chat. Ask me to change them.
