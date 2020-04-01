package com.example.demo.service;

import com.example.demo.exceptions.NotFoundException;
import com.example.demo.model.conductor;
import com.example.demo.model.conductorrepository;

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
public class conductorService {

    @Autowired
    conductorrepository repository;

    @GetMapping("/conductor")
    Iterable<conductor> getconductor() {
        return repository.findAll();
    }

    @GetMapping("/conductor/{id}")
    conductor findconductor(@PathVariable Long id) {
        return repository.findById(id).orElseThrow(() -> new NotFoundException("conductor not found"));
    }

    @PostMapping("/conductor")
    conductor createconductor(@RequestBody conductor conductor) {
        return repository.save(conductor);
    }

    @PutMapping("/conductor/{id}")
    conductor updateconductor(@PathVariable Long id, @RequestBody conductor conductorData) {

        conductor conductor = findconductor(id);
        conductor.setCiudad(conductorData.getCiudad());
        conductor.setDireccion(conductorData.getDireccion());
        conductor.setNombre(conductorData.getNombre());
        conductor.setTelefono(conductorData.getTelefono());

        return repository.save(conductor);
    }

    @DeleteMapping("/conductor/{id}")
    void deleteconductor(@PathVariable Long id) {
        if (repository.existsById(id)) {
            repository.deleteById(id);
        } else {
            throw new NotFoundException();
        }
    }

}