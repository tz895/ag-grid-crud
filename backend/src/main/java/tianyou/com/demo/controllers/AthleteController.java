package tianyou.com.demo.controllers;


import org.springframework.web.bind.annotation.*;
import tianyou.com.demo.Model.Athlete;
import tianyou.com.demo.repositories.AthleteRepository;

import java.util.Optional;
@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class AthleteController {
    private AthleteRepository athleteRepository;

    public AthleteController(AthleteRepository athleteRepository) {
        this.athleteRepository = athleteRepository;
    }

    @GetMapping("/athletes")
    public Iterable<Athlete> getAthletes() {
        return athleteRepository.findAll();
    }

    @GetMapping("/athlete")
    public Optional<Athlete> getAthlete(@RequestParam(value = "id") Long athleteId) {
        return athleteRepository.findById(athleteId);
    }

    @PostMapping("/saveAthlete")
    public Athlete saveAthlete(@RequestBody Athlete athlete) {
        return athleteRepository.save(athlete);
    }

    @PostMapping("/deleteAthlete")
    public boolean deleteAthlete(@RequestBody Long athleteId) {
        athleteRepository.deleteById(athleteId);
        return true;
    }
}
