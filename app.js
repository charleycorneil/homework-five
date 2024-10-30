// Starting Decision
let decision1 =
  prompt(`You begin your solo road trip from Indiana to Colorado! Do you:
    1. Take the scenic route through small towns
    2. Stick to the main highway for a faster trip
    (Enter 1 or 2)`);

if (decision1 === "1") {
  document.getElementById("story").innerHTML =
    "You choose the scenic route, passing through charming small towns.";

  let decision2 =
    prompt(`In the first town, you see a sign for a local art festival. Do you:
        1. Stop to explore the festival
        2. Continue driving
        (Enter 1 or 2)`);

  if (decision2 === "1") {
    document.getElementById("story").innerHTML +=
      " You decide to check out the festival and find beautiful handmade crafts.";

    let decision4 =
      prompt(`At the festival, a vendor tells you about a famous mural nearby. Do you:
            1. Go see the mural
            2. Move on with your journey
            (Enter 1 or 2)`);

    if (decision4 === "1") {
      document.getElementById("story").innerHTML +=
        " The mural is stunning and offers a great photo opportunity.";

      let decision8 = prompt(`After the mural, you get hungry. Do you:
                1. Try a local diner
                2. Eat snacks you brought with you
                (Enter 1 or 2)`);

      if (decision8 === "1") {
        document.getElementById("story").innerHTML +=
          " The diner serves delicious comfort food, making the stop worthwhile.";
      } else {
        document.getElementById("story").innerHTML +=
          " You snack on the road and continue your journey.";
      }
    } else {
      document.getElementById("story").innerHTML +=
        " You decide to keep moving and enjoy the road scenery.";
    }
  } else {
    document.getElementById("story").innerHTML +=
      " You continue driving, eager to reach Colorado.";

    let decision5 =
      prompt(`You see a historic bridge with a scenic overlook. Do you:
            1. Stop to take pictures
            2. Keep driving
            (Enter 1 or 2)`);

    if (decision5 === "1") {
      document.getElementById("story").innerHTML +=
        " The overlook offers breathtaking views.";

      let decision9 =
        prompt(`A local offers to tell you the bridge's history. Do you:
                1. Listen to the story
                2. Politely decline and leave
                (Enter 1 or 2)`);

      if (decision9 === "1") {
        document.getElementById("story").innerHTML +=
          " The story adds depth to your experience and you learn something new.";
      } else {
        document.getElementById("story").innerHTML +=
          " You thank the local and get back on the road.";
      }
    } else {
      document.getElementById("story").innerHTML +=
        " You skip the overlook, saving time for your journey ahead.";
    }
  }
} else if (decision1 === "2") {
  document.getElementById("story").innerHTML =
    "You take the highway, aiming for efficiency.";

  let decision3 =
    prompt(`On the highway, you see a billboard for a scenic state park. Do you:
        1. Exit to visit the park
        2. Stay on the highway
        (Enter 1 or 2)`);

  if (decision3 === "1") {
    document.getElementById("story").innerHTML +=
      " You exit to explore the park, finding beautiful hiking trails.";

    let decision6 =
      prompt(`At the park entrance, you see options for different trails. Do you:
            1. Take the easy trail for a quick view
            2. Choose a challenging trail with better views
            (Enter 1 or 2)`);

    if (decision6 === "1") {
      document.getElementById("story").innerHTML +=
        " The easy trail offers scenic views without much effort.";

      let decision10 = prompt(`After the hike, you find a picnic area. Do you:
                1. Have a picnic lunch
                2. Head back to the car
                (Enter 1 or 2)`);

      if (decision10 === "1") {
        document.getElementById("story").innerHTML +=
          " You enjoy a relaxing picnic in a beautiful setting.";
      } else {
        document.getElementById("story").innerHTML +=
          " You decide to head back, eager to continue your journey.";
      }
    } else {
      document.getElementById("story").innerHTML +=
        " The challenging trail leads to stunning views but leaves you tired.";

      let decision11 = prompt(`On your way back, you see a gift shop. Do you:
                1. Buy a souvenir
                2. Skip the shop
                (Enter 1 or 2)`);

      if (decision11 === "1") {
        document.getElementById("story").innerHTML +=
          " You pick up a memorable keepsake from your hike.";
      } else {
        document.getElementById("story").innerHTML +=
          " You skip the shop, keeping your memories with you.";
      }
    }
  } else {
    document.getElementById("story").innerHTML +=
      " You stay on the highway, making good time.";

    let decision7 =
      prompt(`A friend calls and suggests you visit a famous roadside attraction nearby. Do you:
            1. Detour to visit it
            2. Stick to your original plan
            (Enter 1 or 2)`);

    if (decision7 === "1") {
      document.getElementById("story").innerHTML +=
        " The attraction is unique, and you enjoy a quick detour.";

      let decision12 = prompt(`At the attraction, there's a guided tour. Do you:
                1. Join the tour
                2. Explore on your own
                (Enter 1 or 2)`);

      if (decision12 === "1") {
        document.getElementById("story").innerHTML +=
          " The tour is fascinating and gives you deeper insight.";
      } else {
        document.getElementById("story").innerHTML +=
          " You explore solo, enjoying the freedom to wander.";
      }
    } else {
      document.getElementById("story").innerHTML +=
        " You decide to skip the detour and keep your focus on Colorado.";

      let decision13 = prompt(`You're getting tired. Do you:
                1. Find a hotel to rest
                2. Push through the fatigue
                (Enter 1 or 2)`);

      if (decision13 === "1") {
        document.getElementById("story").innerHTML +=
          " You find a cozy hotel and get a good night's sleep.";
      } else {
        document.getElementById("story").innerHTML +=
          " You push through and finally arrive in Colorado, exhausted but happy.";
      }
    }
  }
} else {
  document.getElementById("story").innerHTML =
    "You decide to stay home and postpone your trip, missing out on the adventure.";
}
