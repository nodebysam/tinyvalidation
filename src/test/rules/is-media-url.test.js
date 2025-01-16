/**
 * TINY VALIDATION
 * A minimalistic NodeJS data validation library
 * 
 * By Sam Wilcox <wilcox.sam@gmail.com>
 * 
 * This library is relased under the GNU v3.0 license.
 * For further details, see the LICENSE file.
 */

const test = require('ava');
const isMediaUrl = require('../../rules/is-media-url');

// Default media URLs
test('isMediaUrl › should return true for a YouTube URL', t => {
    t.true(isMediaUrl('https://www.youtube.com/watch?v=dQw4w9WgXcQ'));
    t.true(isMediaUrl('https://youtu.be/dQw4w9WgXcQ'));
    t.true(isMediaUrl('https://www.youtube.com/embed/dQw4w9WgXcQ'));
});

test('isMediaUrl › should return true for a TikTok URL', t => {
    t.true(isMediaUrl('https://www.tiktok.com/@username/video/1234567890'));
    t.true(isMediaUrl('https://tiktok.com/@username/video/1234567890'));
});

test('isMediaUrl › should return true for a Vimeo URL', t => {
    t.true(isMediaUrl('https://vimeo.com/123456789'));
    t.true(isMediaUrl('https://www.vimeo.com/123456789'));
});

test('isMediaUrl › should return true for a Facebook video URL', t => {
    t.true(isMediaUrl('https://www.facebook.com/watch/?v=1234567890'));
    t.true(isMediaUrl('https://www.facebook.com/username/videos/1234567890/'));
});

test('isMediaUrl › should return true for a Rumble URL', t => {
    t.true(isMediaUrl('https://rumble.com/v123456789/awesome-video.html'));
});

test('isMediaUrl › should return true for an Instagram post URL', t => {
    t.true(isMediaUrl('https://www.instagram.com/p/Cn12345678X/'));
});

test('isMediaUrl › should return true for a Twitter status URL', t => {
    t.true(isMediaUrl('https://twitter.com/username/status/1234567890'));
});

test('isMediaUrl › should return true for a Dailymotion video URL', t => {
    t.true(isMediaUrl('https://www.dailymotion.com/video/x123456'));
});

test('isMediaUrl › should return true for a SoundCloud track URL', t => {
    t.true(isMediaUrl('https://soundcloud.com/artist-name/track-name'));
});

// Invalid media URLs
test('isMediaUrl › should return false for non-media URLs', t => {
    t.false(isMediaUrl('https://www.example.com'));
    t.false(isMediaUrl('https://github.com'));
    t.false(isMediaUrl('https://stackoverflow.com/questions/123456'));
});

// Custom Regex List
test('isMediaUrl › should return true for a custom media URL with customRegexList', t => {
    const customRegexList = [/^(https?:\/\/)?(www\.)?mycustommedia\.com\/video\/(\d+)$/];
    t.true(isMediaUrl('https://www.mycustommedia.com/video/12345', { customRegexList }));
    t.false(isMediaUrl('https://www.notamediaurl.com', { customRegexList }));
});

// Additional Regex List
test('isMediaUrl › should return true for an additional media URL with additionalRegexList', t => {
    const additionalRegexList = [/^(https?:\/\/)?(www\.)?newmedia\.com\/\S+$/];
    t.true(isMediaUrl('https://www.newmedia.com/video/67890', { additionalRegexList }));
    t.true(isMediaUrl('https://newmedia.com/clip/12345', { additionalRegexList }));
    t.false(isMediaUrl('https://www.anotherexample.com', { additionalRegexList }));
});