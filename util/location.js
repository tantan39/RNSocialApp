const MAP_API_KEY = "AIzaSyAwBS6Ov0JPZnhRSiqbHOrC_xXov7TZjdw";

function getMapPreview(lat, lng) {
  const imagePreviewUrl = `https://maps.googleapis.com/maps/api/staticmap?center=${lat},${lng}&zoom=14&size=400x200&maptype=roadmap
&markers=color:blue%7Clabel:S%7C${lat},${lng}&key=${MAP_API_KEY}`;
  return imagePreviewUrl;
}

export default getMapPreview;
