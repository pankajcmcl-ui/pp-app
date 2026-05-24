╔══════════════════════════════════════════════════════════════════╗
║  PACKING PLANT — FINAL SECURE SETUP GUIDE                       ║
║  Admin Email: pankaj.cmcl@gmail.com                              ║
╚══════════════════════════════════════════════════════════════════╝

❗ DO EXACTLY THESE STEPS IN ORDER. DO NOT SKIP ANY.

════════════════════════════════════════════════════════════════════
STEP 1: DELETE ALL OLD FILES ON GITHUB (5 MIN)
════════════════════════════════════════════════════════════════════

1. Open: https://github.com/pankajcmcl-ui/pp-app
2. For EACH file listed below, click on it and DELETE it:
   - icon-192.png
   - icon-512.png
   - index.html (or index-3.html, or index-1.html, anything starting with "index")
   - manifest.json
   - sw.js

HOW TO DELETE A FILE:
   a. Click on the file name (e.g. "index-3.html")
   b. Look for top right buttons: Raw, copy, download, pencil
   c. Click the small "..." or dropdown arrow next to pencil
   d. Click "Delete file"
   e. Scroll down, click green "Commit changes"
   f. Repeat for next file

AT THE END: Your repo should be EMPTY (only README.md remains)

════════════════════════════════════════════════════════════════════
STEP 2: UPLOAD THE 5 NEW FILES (3 MIN)
════════════════════════════════════════════════════════════════════

1. Still on https://github.com/pankajcmcl-ui/pp-app
2. Click "Add file" (top right) → "Upload files"
3. From your computer, open the folder where you downloaded these files
4. SELECT ALL 5 FILES at once:
   - icon-192.png
   - icon-512.png
   - index.html  ← MUST be named exactly "index.html" (not index-2 etc)
   - manifest.json
   - sw.js
5. Drag all 5 files into the upload box
6. Scroll down → green "Commit changes" → click

IMPORTANT: If your computer already has "index.html" and renamed the
new download to "index (1).html" or "index-2.html":
   → Rename it back to "index.html" BEFORE uploading
   → Right-click file → Rename → type "index.html"

After upload, your repo should show EXACTLY these 5 files (no extras)

════════════════════════════════════════════════════════════════════
STEP 3: ENABLE GOOGLE LOGIN IN FIREBASE (3 MIN)
════════════════════════════════════════════════════════════════════

1. Open: https://console.firebase.google.com
2. Click your project: PackingPlant
3. In left sidebar, look for "Authentication" (with people icon)
   - If you don't see it: click "Search for products" at top → type "Authentication" → click it
4. Click "Get started" button
5. Click "Sign-in method" tab at top
6. Click "Google" in the providers list
7. Toggle "Enable" switch ON (right side)
8. Project support email dropdown → select pankaj.cmcl@gmail.com
9. Click "Save"

✅ Done when you see green "Enabled" next to Google

════════════════════════════════════════════════════════════════════
STEP 4: SET FIREBASE SECURITY RULES (2 MIN)
════════════════════════════════════════════════════════════════════

1. Still in Firebase Console
2. Left sidebar → "Realtime Database"
3. Click "Rules" tab at the top
4. Select all existing rules (Ctrl+A) → press Delete key
5. Open the file FIREBASE_RULES.txt (in this same folder)
6. Copy ONLY the JSON block (everything inside { ... })
7. Paste into Firebase rules editor
8. Click blue "Publish" button at top
9. If a popup asks to confirm → click Publish again

✅ Done when you see green "Rules published" message

════════════════════════════════════════════════════════════════════
STEP 5: GET FIREBASE CONFIG (2 MIN)
════════════════════════════════════════════════════════════════════

1. Click ⚙ gear icon (top of left sidebar, next to "Project Overview")
2. Click "Project settings"
3. Make sure "General" tab is selected
4. Scroll DOWN to the bottom — section called "Your apps"

IF YOU SEE NO APPS:
   - Click the </> icon (web icon)
   - App nickname: PP Web
   - Do NOT check Firebase Hosting
   - Click "Register app"
   - Click "Continue to console"

IF YOU SEE AN APP ALREADY:
   - Click on it to expand
   - Find "SDK setup and configuration"
   - Click "Config" radio button

5. You'll see code that looks like this:

   const firebaseConfig = {
     apiKey: "AIzaSyXXXXXXX...",
     authDomain: "packingplant.firebaseapp.com",
     databaseURL: "https://packingplant-default-rtdb.firebaseio.com",
     projectId: "packingplant",
     storageBucket: "packingplant.appspot.com",
     messagingSenderId: "123456789",
     appId: "1:..."
   };

6. SELECT and COPY the entire block from { to }

════════════════════════════════════════════════════════════════════
STEP 6: OPEN THE APP AND CONFIGURE (3 MIN)
════════════════════════════════════════════════════════════════════

1. CLEAR YOUR BROWSER CACHE FIRST:
   - Chrome: Ctrl+Shift+Delete → "All time" → check "Cached images" → Clear
   - OR just use Incognito mode (Ctrl+Shift+N)

2. Open this URL in your browser:
   https://pankajcmcl-ui.github.io/pp-app/

3. You should see "Admin Setup (One Time)" screen with a big text box

   IF YOU SEE OLD SCREEN INSTEAD ("Connect & Launch"):
   - Old version still cached. Try:
     a. Hard refresh: Ctrl+Shift+R
     b. Or open in different browser (Edge, Firefox)
     c. Or add ?fresh=1 to URL

4. PASTE the firebaseConfig you copied in Step 5 (the whole { ... } block)

5. Click "Save Firebase Config"

6. Page reloads automatically → you see "Sign in with Google" button

7. Click "Sign in with Google" → choose pankaj.cmcl@gmail.com → Allow

8. You're in as ADMIN with "ADMIN" badge in header ✅

════════════════════════════════════════════════════════════════════
STEP 7: ADD TEAM MEMBERS (1 MIN EACH)
════════════════════════════════════════════════════════════════════

1. Tap "About" tab at bottom navigation
2. Scroll down → "Manage Team Access (Admin Only)" card appears
3. Type team member's Gmail address (e.g. amit@gmail.com)
4. Click "Add"
5. Repeat for each team member

For each added user:
- Send them this message: 
  "Open https://pankajcmcl-ui.github.io/pp-app/
   Click Sign in with Google
   Choose your Gmail account"
- They get instant access, view+add only (no edit/delete)

════════════════════════════════════════════════════════════════════
✅ FINISHED! YOUR DATA IS NOW FULLY SECURE
════════════════════════════════════════════════════════════════════

What you have now:
✅ Only Google-authenticated users can access
✅ Only emails you whitelist can log in
✅ Only YOU (pankaj.cmcl@gmail.com) can edit/delete data
✅ Database locked at server level
✅ No passwords visible anywhere
✅ Free forever

════════════════════════════════════════════════════════════════════
TROUBLESHOOTING
════════════════════════════════════════════════════════════════════

PROBLEM: 404 error when opening app URL
SOLUTION: File on GitHub is named wrong. Make sure it's "index.html"

PROBLEM: Still seeing old "Connect & Launch" screen
SOLUTION: Browser cache. Use Incognito mode (Ctrl+Shift+N)

PROBLEM: "Access denied" when signing in with Google
SOLUTION: Your email isn't admin. Make sure you logged in as
          pankaj.cmcl@gmail.com (admin), not another email

PROBLEM: Firebase rules error
SOLUTION: Make sure you copied JSON exactly from FIREBASE_RULES.txt
          including the outer { ... } braces

═══════════════════════════════════════════════════════════════════
