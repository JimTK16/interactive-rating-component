window.onload = function () {
  const url = new URL(window.location.href);
  const rating = url.searchParams.get("rating");
  document.getElementById("message").innerHTML =
    "You selected " + rating + " out of 5";
};
