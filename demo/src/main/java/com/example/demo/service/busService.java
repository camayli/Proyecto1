package com.example.demo.service;

import com.example.demo.exceptions.NotFoundException;
import com.example.demo.model.bus;
import com.example.demo.model.busrepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
@RequestMapping("/api")
public class busService {

    @Autowired
    busrepository repository;

    @GetMapping("/bus")
    Iterable<bus> getbus() {
        return repository.findAll();
    }

    @GetMapping("/bus/{id}")
    bus findbus(@PathVariable Long id) {
        return repository.findById(id).orElseThrow(() -> new NotFoundException("bus not found"));
    }

    @PostMapping("/bus")
    bus createbus(@RequestBody bus bus) {
        return repository.save(bus);
    }

    @PutMapping("/bus/{id}")
    bus updatebus(@PathVariable Long id, @RequestBody bus busData) {

        bus bus = findbus(id);
        bus.setModelo(busData.getModelo());
        bus.setPlaca(busData.getPlaca());
        bus.setRutas(busData.getRutas());

        return repository.save(bus);
    }

    @DeleteMapping("/bus/{id}")
    void deletebus(@PathVariable Long id) {
        if (repository.existsById(id)) {
            repository.deleteById(id);
        } else {
            throw new NotFoundException();
        }
    }

}