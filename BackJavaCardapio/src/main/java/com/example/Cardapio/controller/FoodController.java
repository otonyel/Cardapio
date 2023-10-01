package com.example.Cardapio.controller;
//[IMPORTAÇÕES]::
import com.example.Cardapio.food.Food;
import com.example.Cardapio.food.FoodRepository;
import com.example.Cardapio.food.FoodRequestDTO;
import com.example.Cardapio.food.FoodResponseDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

//[CONTROLADOR]::
@RestController
@RequestMapping("food")
public class FoodController {
    @Autowired
    private FoodRepository repository;

    /*[FUNÇÃO]::POST
    ::  Salva dados no Banco de dados
    */
    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @PostMapping
    public void setFood(@RequestBody FoodRequestDTO data){
        repository.save(new Food(data));
        return;
    }
    /*[FUNÇÃO]::GET
    ::  Obtem todos os items do Banco de Dados.
    */
    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @GetMapping
    public List<FoodResponseDTO> getAll(){
        return (List<FoodResponseDTO>)repository.findAll().stream().map(FoodResponseDTO::new).toList();
    }
}
