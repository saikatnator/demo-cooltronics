function sendToWatsapp(serviceNumber) {
    let number = 9830409300;
    let name = document.getElementById('firstName-'+serviceNumber).value;
    let customerNumber = document.getElementById('phoneNumber-'+serviceNumber).value
    let selectedArea = document.getElementById('areaSelection-'+serviceNumber).value
    let selectedAppliance = document.getElementById('applianceSelection-'+serviceNumber).value
    let warrantyStatus = document.getElementById('warranty-'+serviceNumber).value

    let url = "https://wa.me/" + number + "?text=" 
    + "Name: " + name + "%0a"
    + "Phone Number: " + customerNumber + "%0a"
    + "Area: " + selectedArea + "%0a"
    + "Appliance: " + selectedAppliance + "%0a"
    + "Warranty Period: " + warrantyStatus;

    window.open(url, '_blank').focus();
}