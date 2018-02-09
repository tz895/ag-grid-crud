package tianyou.com.demo.controllers;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import tianyou.com.demo.Model.Country;
import tianyou.com.demo.Model.Sport;
import tianyou.com.demo.repositories.CountryRepository;
import tianyou.com.demo.repositories.SportRepository;
import java.util.Optional;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class StaticDataController {
    private CountryRepository countryRepository;
    private SportRepository sportRepository;

    public StaticDataController(CountryRepository countryRepository, SportRepository sportRepository) {
        this.countryRepository = countryRepository;
        this.sportRepository = sportRepository;
    }

    @GetMapping("/countries")
    public Iterable<Country> getCountries() {
        return countryRepository.findAll();
    }

    @GetMapping("/sports")
    public Iterable<Sport> getSports() {
        return sportRepository.findAll();
    }
}
