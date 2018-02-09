package tianyou.com.demo.repositories;

import tianyou.com.demo.Model.Country;
import org.springframework.data.repository.CrudRepository;

public interface CountryRepository extends CrudRepository<Country, Long> {
    Country findByName(String name);
}