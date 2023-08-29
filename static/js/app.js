const sampleData = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json" 

// Initializing the data
d3.json(sampleData).then(function(data) {
    console.log(data);

    // Extracting the sample data for the first test subject
    let firstSubject = data.samples[0]
    let otuIDs = firstSubject.otu_ids
    let otuLabels = firstSubject.otu_labels
    let sampleValues = firstSubject.sample_values

    IDs = [];
    labels = [];
    values = [];

    // Looping through the data to push it to their respective arrays
    for (let i = 0; i < otuIDs.length; i++) {
        let ID = otuIDs[i]
        IDs.push(ID);
    }

    for (let i = 0; i < otuLabels.length; i++) {
        let label = otuLabels[i]
        labels.push(label);
    }

    for (let i = 0; i < sampleValues.length; i++) {
        let value = sampleValues[i]
        values.push(value);
    }

    // Create y labels for chart
    otuIDwithText = []
    for (i = 0; i < IDs.length; i++) {
        let otu = IDs[i]
        otuIDwithText.push('OTU '+ otu)
    }

    // Create the graph
    let trace1 = {
        type: 'bar',
        x: values.slice(0,10).reverse(),
        y: otuIDwithText.slice(0,10).reverse(),
        text: labels.slice(0,10).reverse(),
        orientation: 'h',
    }

    let data1 = [trace1];

    Plotly.newPlot('bar', data1);

    // Creating the bubble chart
    
    let trace2 = {
        x: IDs,
        y: values,
        mode: 'markers',
        marker: {
            size: values,
            color: IDs
        },
        text: labels
    }

    let layout = {
        xaxis: {
            title: {
                text: 'OTU ID'

            }
        }
    }
    let data2 = [trace2]

    Plotly.newPlot('bubble', data2, layout);

});



