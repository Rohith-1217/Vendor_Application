package com.vendorProject.vendorbackend.model;

import jakarta.persistence.*;

@Entity
@Table(name="vendors")
public class Vendor {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    @Column(name="vendor_name")
    private String vendorName;
    @Column(name="primevendor_name")
    private String primeVendorName;
    @Column(name="client_name")
    private String clientName;
    @Column(name="vendor_phoneno")
    private String vendorPhoneno;
    @Column(name="vendor_emailid")
    private String vendorEmailid;
    @Column(name="vendor_payrate")
    private long payRate;

    public Vendor() {
    }

    public Vendor(long id, String vendorName, String primeVendorName, String clientName, String vendorPhoneno, String vendorEmailid, long payRate) {
        super();
        this.id = id;
        this.vendorName = vendorName;
        this.primeVendorName = primeVendorName;
        this.clientName = clientName;
        this.vendorPhoneno = vendorPhoneno;
        this.vendorEmailid = vendorEmailid;
        this.payRate = payRate;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getVendorName() {
        return vendorName;
    }

    public void setVendorName(String vendorName) {
        this.vendorName = vendorName;
    }

    public String getPrimeVendorName() {
        return primeVendorName;
    }

    public void setPrimeVendorName(String primeVendorName) {
        this.primeVendorName = primeVendorName;
    }

    public String getClientName() {
        return clientName;
    }

    public void setClientName(String clientName) {
        this.clientName = clientName;
    }

    public String getVendorPhoneno() {
        return vendorPhoneno;
    }

    public void setVendorPhoneno(String vendorPhoneno) {
        this.vendorPhoneno = vendorPhoneno;
    }

    public String getVendorEmailid() {
        return vendorEmailid;
    }

    public void setVendorEmailid(String vendorEmailid) {
        this.vendorEmailid = vendorEmailid;
    }

    public long getPayRate() {
        return payRate;
    }

    public void setPayRate(long payRate) {
        this.payRate = payRate;
    }
}
