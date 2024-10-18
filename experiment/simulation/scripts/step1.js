var sampleName = ["Borewell Water", "Muncipal Water", "Treated Water"];

var step2 = [
  "https://assets2.lottiefiles.com/packages/lf20_IensYt.json",
  "https://assets2.lottiefiles.com/packages/lf20_Txlgtb.json",
  "https://assets4.lottiefiles.com/packages/lf20_elWMfJ.json",
];

var step3 = [
  "https://assets3.lottiefiles.com/packages/lf20_UP5gu1.json",
  "https://assets8.lottiefiles.com/packages/lf20_mhpcKG.json",
  "https://assets6.lottiefiles.com/packages/lf20_6PBsA1.json",
];

var step4 = [
  "https://assets1.lottiefiles.com/packages/lf20_Wh8078.json",
  "https://assets1.lottiefiles.com/packages/lf20_MbHkuH.json",
  "https://assets1.lottiefiles.com/packages/lf20_pschU2.json",
];

var step5 = [
  "https://assets6.lottiefiles.com/packages/lf20_8rVsux.json",
  "https://assets1.lottiefiles.com/packages/lf20_SD53lh.json",
  "https://assets3.lottiefiles.com/packages/lf20_nUmgSD.json",
];

var selectedSample = null;
var selectedSampleName = null;

var lottie2 = null;
var lottie3 = null;
var lottie4 = null;
var lottie5 = null;

function selectSample(sender, id) {
  if (selectedSample == null) {
    selectedSample = id;
    selectedSampleName = sampleName[id];
    // console.log(selectedSampleName);
    document.getElementById("step-6_selectedSample").value = selectedSampleName;
    if (id == 0) {
      document.getElementById("EDTAused").value = 7.2;
    } else if (id == 1) {
      document.getElementById("EDTAused").value = 4.2;
    } else if (id == 2) {
      document.getElementById("EDTAused").value = 2.45;
    }
    task_done = true;

    gsap.to(".step1-tools .tooltiptext", { opacity: 0 });
    gsap.to(sender, {
      duration: 1,
      y: -100,
      ease: Back.easeOut.config(1.7),
    });

    lottie2 = bodymovin.loadAnimation({
      container: document.querySelector("#step-2 .bodymovinanim"),
      renderer: "svg",
      loop: false,
      autoplay: false,
      path: step2[selectedSample],
    });
    lottie2.setSpeed(0.75);

    lottie3 = bodymovin.loadAnimation({
      container: document.querySelector("#step-3 .bodymovinanim"),
      renderer: "svg",
      loop: false,
      autoplay: false,
      path: step3[selectedSample],
    });
    lottie3.setSpeed(0.75);

    lottie4 = bodymovin.loadAnimation({
      container: document.querySelector("#step-4 .bodymovinanim"),
      renderer: "svg",
      loop: false,
      autoplay: false,
      path: step4[selectedSample],
    });
    lottie4.setSpeed(0.75);

    lottie5 = bodymovin.loadAnimation({
      container: document.querySelector("#step-5 .bodymovinanim"),
      renderer: "svg",
      loop: false,
      autoplay: false,
      path: step5[selectedSample],
    });
    lottie5.setSpeed(0.75);

    // document.querySelector('#step-5 .sample-name').innerHTML = `${sampleName[selectedSample]}`
    // document.querySelector(
    //   "#step-6 .read-3"
    // ).innerHTML = `${sampleName[selectedSample]}`;

    addTask("step1 : Select the water sample");
  }
}

function checkResult() {
  const val = document.getElementById("inputForResult").value;
  //   console.log(val);
  const resultParagraph = document.getElementById("checkResultParagrah");
  if (selectedSample == 0) {
    if (val == 288) {
      resultParagraph.innerText = "*Right Answer";
      resultParagraph.style.color = "green";
    } else {
      resultParagraph.innerText = "*Wrong Answer";
      resultParagraph.style.color = "red";
    }
  } else if (selectedSample == 1) {
    if (val == 168) {
      resultParagraph.innerText = "*Right Answer";
      resultParagraph.style.color = "green";
    } else {
      resultParagraph.innerText = "*Wrong Answer";
      resultParagraph.style.color = "red";
    }
  } else if (selectedSample == 2) {
    if (val == 98) {
      resultParagraph.innerText = "*Right Answer";
      resultParagraph.style.color = "green";
    } else {
      resultParagraph.innerText = "*Wrong Answer";
      resultParagraph.style.color = "red";
    }
  } else {
    if (val == "128") {
      resultParagraph.innerText = "*Right Answer";
      resultParagraph.style.color = "green";
    } else {
      resultParagraph.innerText = "*Wrong Answer";
      resultParagraph.style.color = "red";
    }
  }
}

function openResult() {
  if (selectedSample == 0) {
    document.getElementById(
      "step-6Result"
    ).innerText = `Hardness of water(as CaCO3) = ${288} mg/l`;
    document.getElementById(
      "conclusionParagraph"
    ).innerText = `The results indicated that the hardness of selected sample of water is ${288}mg/L. As per general specification this water is considered as very hard water. `;
  } else if (selectedSample == 1) {
    document.getElementById(
      "step-6Result"
    ).innerText = `Hardness of water(as CaCO3) = ${168} mg/l`;
    document.getElementById(
      "conclusionParagraph"
    ).innerText = `The results indicated that the hardness of selected sample of water is ${168}mg/L.As per general specification this water is considered as medium hard water and fit for drining.`;
  } else if (selectedSample == 2) {
    document.getElementById(
      "step-6Result"
    ).innerText = `Hardness of water(as CaCO3) = ${98} mg/l`;
    document.getElementById(
      "conclusionParagraph"
    ).innerText = `The results indicated that the hardness of selected sample of water is ${98}mg/L. As per general specification this water is considered as soft water `;
  } else {
    document.getElementById(
      "step-6Result"
    ).innerText = `Hardness of water(as CaCO3) = ${128} mg/l`;
    document.getElementById(
      "conclusionParagraph"
    ).innerText = `The results indicated that the hardness of selected sample of water is ${128}mg/L. As per general specification this water is considered as very hard water. `;
  }
  task_done = true;
  addTask("step6: Observation and Result completed successfully");
}
