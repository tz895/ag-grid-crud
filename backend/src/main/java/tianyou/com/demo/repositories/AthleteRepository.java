package tianyou.com.demo.repositories;

import tianyou.com.demo.Model.Athlete;
import org.springframework.data.repository.CrudRepository;

public interface AthleteRepository extends CrudRepository<Athlete, Long> {
    Athlete findByName(String name);
}
