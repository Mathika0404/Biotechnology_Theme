const openMenu = document.getElementById("openMenu");
const closeMenu = document.getElementById("closeMenu");
const sidebar = document.getElementById("sidebar");

openMenu.onclick = () => {
    sidebar.classList.add("active");
};

closeMenu.onclick = () => {
    sidebar.classList.remove("active");
};

//DASHBOARD SECTION
const dnaChart = new Chart(
document.getElementById("dnaChart"),
{
type:"doughnut",
data:{
labels:["Completed","Pending"],
datasets:[{
data:[70,30],
backgroundColor:["#29c7ac","#e0e0e0"]
}]
},
options:{cutout:"70%"}
}
)


const expChart = new Chart(
document.getElementById("expChart"),
{
type:"doughnut",
data:{
labels:["Success","Failed"],
datasets:[{
data:[80,20],
backgroundColor:["#5b7cfa","#e0e0e0"]
}]
},
options:{cutout:"70%"}
}
)



const dataByMonth = {

"2026-01":{
experiments:120,
samples:420,
dna:80,
researchers:22,
dnaChart:[65,35],
expChart:[75,25]
},

"2026-02":{
experiments:150,
samples:500,
dna:95,
researchers:25,
dnaChart:[72,28],
expChart:[82,18]
},

"2026-03":{
experiments:128,
samples:452,
dna:89,
researchers:24,
dnaChart:[70,30],
expChart:[80,20]
}

}



document
.getElementById("monthPicker")
.addEventListener("change",function(){

let month=this.value
let data=dataByMonth[month]

if(!data) return

document.getElementById("experiments").innerText=data.experiments
document.getElementById("samples").innerText=data.samples
document.getElementById("dna").innerText=data.dna
document.getElementById("researchers").innerText=data.researchers


dnaChart.data.datasets[0].data=data.dnaChart
dnaChart.update()

expChart.data.datasets[0].data=data.expChart
expChart.update()

})


// FLOW CHART

new Chart(document.getElementById("geneChart"),{
type:"line",
data:{
labels:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep"],
datasets:[{
label:"Gene Activity",
data:[120,150,180,210,260,240,300,330,370],
borderColor:"#29c7ac",
backgroundColor:"rgba(41,199,172,0.2)",
fill:true,
tension:0.4
}]
},
options:{
plugins:{legend:{display:false}},
scales:{y:{beginAtZero:true}}
}
})


// MINI CHART 1

new Chart(document.getElementById("sampleChart"),{
type:"doughnut",
data:{
datasets:[{
data:[60,40],
backgroundColor:["#7b5cff","#eee"],
borderWidth:0
}]
},
options:{
cutout:"75%",
plugins:{legend:{display:false}}
}
})


new Chart(document.getElementById("dnaMiniChart"),{
type:"doughnut",
data:{
datasets:[{
data:[75,25],
backgroundColor:["#29c7ac","#eee"],
borderWidth:0
}]
},
options:{
cutout:"75%",
plugins:{legend:{display:false}}
}
})

new Chart(document.getElementById("publicationChart"),{
type:"doughnut",
data:{
datasets:[{
data:[72,28],
backgroundColor:["#29c7ac","#e5e7eb"],
borderWidth:0
}]
},
options:{
cutout:"75%",
plugins:{legend:{display:false}}
}
})

// ============================
// SECTION VISIBILITY CONTROL
// ============================

// sidebar menu links
const menuLinks = document.querySelectorAll(".sidebar-menu a");

// sections
const dashboardSection = document.querySelector(".admin-dashboard");
const analyticsSection = document.querySelector(".bio-analytics");
const experimentSections = document.querySelectorAll(".experiment-section");
const labreportSection = document.querySelector(".lab-reports");
const dnaAnalyticsSection = document.querySelector(".dna-analytics");
const researchPapersSection = document.querySelector(".research-papers");

// function to hide all sections
function hideAllSections() {

    dashboardSection.style.display = "none";
    analyticsSection.style.display = "none";
    labreportSection.style.display = "none";
    dnaAnalyticsSection.style.display = "none";
    researchPapersSection.style.display = "none";

    experimentSections.forEach(section => {
        section.style.display = "none";
    });

}

// show dashboard by default
hideAllSections();
dashboardSection.style.display = "block";
analyticsSection.style.display = "block";

// menu click events
menuLinks.forEach(link => {

    link.addEventListener("click", function(e) {

        const target = this.getAttribute("href");

        // ignore links like settings or 404 page
        if (target.includes(".html")) return;

        e.preventDefault();

        hideAllSections();

        // DASHBOARD
        if (target === "#admin-dashboard") {
            dashboardSection.style.display = "block";
            analyticsSection.style.display = "block";
        }

        // EXPERIMENTS
        if (target === "#experiments") {
            experimentSections.forEach(section => {
                section.style.display = "block";
            });
        }

        // LAB REPORTS
        if (target === "#lab-reports") {
            labreportSection.style.display = "block";
        }

        // DNA ANALYTICS
if (target === "#dna-analytics") {
    dnaAnalyticsSection.style.display = "block";
}

// RESEARCH PAPERS
if (target === "#research-papers") {
    researchPapersSection.style.display = "block";
}
    });

});

// ============================
// EXPERIMENT SECTION CHARTS
// ============================

const centerTextPlugin = {
id: "centerTextPlugin",
afterDraw(chart) {

if(chart.config.type !== "doughnut") return;

const {ctx} = chart;
const dataset = chart.data.datasets[0].data;

const total = dataset.reduce((a,b)=>a+b,0);
const percent = Math.round((dataset[0]/total)*100) + "%";

const x = chart.getDatasetMeta(0).data[0].x;
const y = chart.getDatasetMeta(0).data[0].y;

ctx.save();
ctx.font = "bold 35px Arial";
ctx.fillStyle = "#2b3440";
ctx.textAlign = "center";
ctx.textBaseline = "middle";
ctx.fillText(percent, x, y);
ctx.restore();

}
};


new Chart(document.getElementById("geneEditChart"),{
type:"doughnut",
data:{
labels:["Completed","Running"],
datasets:[{
data:[8,4],
backgroundColor:["#29c7ac","#e0e0e0"],
borderWidth:0
}]
},
options:{
cutout:"70%",
plugins:{legend:{display:false}}
},
plugins:[centerTextPlugin]
});

new Chart(document.getElementById("dnaSeqChart"),{
type:"pie",
data:{
labels:["Processed","Pending"],
datasets:[{
data:[18,10],
backgroundColor:["#5b7cfa","#e0e0e0"],
borderWidth:0
}]
},
options:{
plugins:{legend:{display:false}}
},
plugins:[centerTextPlugin]
});

new Chart(document.getElementById("cellCultureChart"),{
type:"doughnut",
data:{
labels:["Running","Finished"],
datasets:[{
data:[10,6],
backgroundColor:["#7b5cff","#e0e0e0"],
borderWidth:0
}]
},
options:{
cutout:"70%",
plugins:{legend:{display:false}}
},
plugins:[centerTextPlugin]
});

new Chart(document.getElementById("genomeMapChart"),{
type:"pie",
data:{
labels:["Mapped","Remaining"],
datasets:[{
data:[30,12],
backgroundColor:["#29c7ac","#e0e0e0"],
borderWidth:0
}]
},
options:{
plugins:{legend:{display:false}}
},
plugins:[centerTextPlugin]
});

new Chart(document.getElementById("proteinAnalysisChart"),{
type:"doughnut",
data:{
labels:["Success","Failed"],
datasets:[{
data:[28,5],
backgroundColor:["#5b7cfa","#e0e0e0"],
borderWidth:0
}]
},
options:{
cutout:"70%",
plugins:{legend:{display:false}}
},
plugins:[centerTextPlugin]
});

new Chart(document.getElementById("plantBioChart"),{
type:"pie",
data:{
labels:["Growth","Testing"],
datasets:[{
data:[12,6],
backgroundColor:["#7b5cff","#e0e0e0"],
borderWidth:0
}]
},
options:{
plugins:{legend:{display:false}}
},
plugins:[centerTextPlugin]
});



    // DNA Progress Chart
    new Chart(document.getElementById("dnaProgress"), {
        type: "doughnut",
        data: {
            datasets: [{
                data: [72, 28],
                backgroundColor: ["#3b82f6", "#e5e7eb"],
                borderWidth: 0
            }]
        },
        options: {
            cutout: "80%",
            plugins: {
                legend: { display: false }
            }
        }
    });

    // Gene Expression Chart
new Chart(document.getElementById("geneExpressionChart"), {
type: "doughnut",
data: {
datasets: [{
data: [58, 42],
backgroundColor: ["#10b981", "#e5e7eb"],
borderWidth: 0
}]
},
options:{
cutout: "80%",
plugins:{
legend:{display:false}
}
}
});