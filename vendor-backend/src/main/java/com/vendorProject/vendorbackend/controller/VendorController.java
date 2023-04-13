package com.vendorProject.vendorbackend.controller;

import com.vendorProject.vendorbackend.exception.ResourceNotFoundException;
import com.vendorProject.vendorbackend.model.Vendor;
import com.vendorProject.vendorbackend.repository.VendorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/v1/")
public class VendorController {
    @Autowired
    private VendorRepository vendorRepository;

    @GetMapping("/vendors")
    public List<Vendor> getAllVendors() {
        return vendorRepository.findAll();
    }

    @PostMapping("/vendors")
    public Vendor createVendor(@RequestBody Vendor vendor) {
        return vendorRepository.save(vendor);
    }

    @GetMapping("/vendors/{id}")
    public ResponseEntity<Vendor> getVendorById(@PathVariable Long id) {
        Vendor vendor = vendorRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Vendor doesn't exist with ID: " + id));
        return ResponseEntity.ok(vendor);
    }

    @PutMapping("/vendors/{id}")
    public ResponseEntity<Vendor> updateVendorInfo(@PathVariable Long id, @RequestBody Vendor vendorDetails){
        Vendor vendor1 = vendorRepository.findById(id)
                .orElseThrow(()-> new ResourceNotFoundException("Vendor doesn't exist with ID: " + id));
        vendor1.setVendorName(vendorDetails.getVendorName());
        vendor1.setPrimeVendorName(vendorDetails.getPrimeVendorName());
        vendor1.setClientName(vendorDetails.getClientName());
        vendor1.setVendorPhoneno(vendorDetails.getVendorPhoneno());
        vendor1.setVendorEmailid(vendorDetails.getVendorEmailid());
        vendor1.setPayRate(vendorDetails.getPayRate());

        Vendor updatedVendor = vendorRepository.save(vendor1);
        return ResponseEntity.ok(updatedVendor);
    }


    @DeleteMapping("/vendors/{id}")
    public ResponseEntity<Map<String, Boolean>> deleteVendorById(@PathVariable Long id) {
        Vendor vendor = vendorRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Vendor doesn't exist with ID: " + id));
        vendorRepository.delete(vendor);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);
        return ResponseEntity.ok(response);
    }
}
