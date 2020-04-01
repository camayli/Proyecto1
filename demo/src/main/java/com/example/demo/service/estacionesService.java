package com.example.demo.service;

import com.example.demo.exceptions.NotFoundException;
import com.example.demo.model.estaciones;
import com.example.demo.model.estacionesrepository;

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
public class estacionesService {

    @Autowired
    estacionesrepository repository;

    @GetMapping("/estaciones")
    Iterable<estaciones> getEstaciones() {
        return repository.findAll();
    }

    @GetMapping("/estaciones/{id}")
    estaciones findEstaciones(@PathVariable Long id) {
        return repository.findById(id).orElseThrow(() -> new NotFoundException("Estaciones not found"));
    }

    @PostMapping("/estaciones")
    estaciones createEstaciones(@RequestBody estaciones estaciones) {
        return repository.save(estaciones);
    }

    @PutMapping("/estaciones/{id}")
    estaciones updateEstaciones(@PathVariable Long id, @RequestBody estaciones estacionesData) {

        estaciones estaciones = findEstaciones(id);
        estaciones.setDia(estacionesData.getDia());
        estaciones.setHora(estacionesData.getHora());
        estaciones.setEstacion(estacionesData.getEstacion());

        return repository.save(estaciones);
    }

    @DeleteMapping("/estaciones/{id}")
    void deleteEstaciones(@PathVariable Long id) {
        if (repository.existsById(id)) {
            repository.deleteById(id);
        } else {
            throw new NotFoundException();
        }
    }

}